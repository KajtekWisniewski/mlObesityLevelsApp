import pandas as pd
from joblib import load
from itertools import islice

def predict(age, gender, height, weight, CALC, FAVC, FCVC, NCP, SCC, SMOKE, CH20, family_history_with_overweight, FAF, TUE, CAEC, MTRANS): 
    model = load('model/obesity_levels_model.joblib')
    encoder = load('model/obesity_levels_encoder.joblib')

    data = {
        'Age': [age],
        'Gender': [gender],
        'Height': [height],
        'Weight': [weight],
        'CALC': [CALC],
        'FAVC': [FAVC],
        'FCVC': [FCVC],
        'NCP': [NCP],
        'SCC': [SCC],
        'SMOKE': [SMOKE],
        'CH2O': [CH20],
        'family_history_with_overweight': [family_history_with_overweight],
        'FAF': [FAF],
        'TUE': [TUE],
        'CAEC': [CAEC],
        'MTRANS': [MTRANS]
    }

    df = pd.DataFrame(data)

    df['Age'] = df['Age'].astype(int)

    colunas_float = ['Height', 'Weight','NCP', 'FCVC', 'CH2O', 'FAF', 'TUE']

    df[colunas_float] = df[colunas_float].round(2)

    df.shape

    df['BMI'] = round(df['Weight'] / (df['Height']) ** 2, 2)

    df_visu = df.copy()

    columns = ['FCVC', 'NCP', 'CH2O', 'FAF', 'TUE']

    for column in columns:
        df_visu[column] = df_visu[column].round().astype(int)
        
    mapping = {
        'NCP': {
            '1': 'Between 1 and 2',
            '2': 'Three',
            '3': 'More than three',
            '4': 'More than three'
        },
        'CH2O': {
            '1': 'Less than a liter',
            '2': 'Between 1 and 2 L',
            '3': 'More than 2 L',
        },
        'FAF': {
            '0': 'I do not have',
            '1': '1 or 2 days',
            '2': '2 or 4 days',
            '3': '4 or 5 days'
        },
        'TUE': {
            '1': '0–2 hours',
            '2': '3–5 hours',
            '3': 'More than 5 hours',
        },
        'FCVC': {
            '1': 'Never',
            '2': 'Sometimes',
            '3': 'Always',
        }
    }

    for column in columns:
        if column in mapping:
            df_visu[column] = df_visu[column].astype(str).replace(mapping[column])

    new_column_names = {
        'FCVC': 'Frequency of consumption of vegetables (FCVC)',
        'NCP': 'Number of main meals (NCP)',
        'CH2O': 'Consumption of water daily (CH2O)',
        'FAF': 'Physical activity frequency (FAF)',
        'TUE': 'Time using technology devices (TUE)',
        'CALC': 'Consumption of alcohol (CALC)',
        'CAEC': 'Consumption of food between meals (CAEC)',
        'FAVC': 'Frequent consumption of high caloric food (SCC)',
        'SCC' : 'Calories consumption monitoring (FAVC)'
    }

    df_visu.rename(columns=new_column_names, inplace=True)

    new_column_names= dict(islice(new_column_names.items(), 5))

    df_dummies = pd.get_dummies(df)

    categorical_features = df.select_dtypes(exclude="number").columns
    categorical_features

    df.reset_index(inplace=True)

    df.rename(columns={'index': 'ID'}, inplace=True)

    one_hot_cols = categorical_features

    df_categorical = df[one_hot_cols]

    encoded_data = encoder.transform(df_categorical)

    one_hot_feature_names = encoder.get_feature_names_out(one_hot_cols)

    df_encoded = pd.DataFrame(encoded_data.toarray(), columns=one_hot_feature_names)

    df_final = pd.concat([df, df_encoded], axis=1)

    df_final.drop(columns=one_hot_cols, inplace=True)
    df_final.drop('ID', axis=1, inplace=True)

    prediction = model.predict(df_final)
    print(f"The predicted obesity level is: {prediction[0]}")
    return prediction[0]

#predict(25, 'Male', 1.82, 82, 'Sometimes', 'yes', 2, 3, 'no', 'no', 2, 'yes', 2, 1, 'Sometimes', 'Walking')