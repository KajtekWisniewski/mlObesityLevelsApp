import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import seaborn as sns
import numpy as np
import sklearn
from platform import python_version
import warnings
from custom_functions import *
from itertools import islice

# Ignore warniings
warnings.filterwarnings("ignore", category=FutureWarning)

# Libraries and Python version
library = {
    "Pandas": pd,
    "Matplotlib": matplotlib,
    "Seaborn": sns,
    "NumPy": np,
    "Sklearn":sklearn
    }

# Libraries version
print("Library Version:\n")
print(f"{'':-^20} | {'':-^10}")
print(f"{'Library':^20} | {'Version':^10}")
print(f"{'':-^20} | {'':-^10}")

for nome, library in sorted(library.items()):
    print(f"{nome:<20} | {library.__version__:>10}")

# Python Version    
print()
print(f"Python Version: {python_version()}")

df = pd.read_csv('../csvdata/ObesityDataSet_raw_and_data_sinthetic.csv')

print(df.head(5))
print(df.shape)

#Organic Data
df_organic = df.head(498)

#Synthetic Data
df_synthetic = df.iloc[498:]

print(df_organic.tail(3))
print(df_synthetic.head(3))

df_info = pd.DataFrame(df.dtypes, columns=['Dtype'])
df_info['Unique_Organic'] = df_organic.nunique().values
df_info['Unique_Synthetic'] = df_synthetic.nunique().values
df_info

#Converting the "Age" column to integer
df['Age'] = df['Age'].astype(int)

#Float Columns
colunas_float = ['Height', 'Weight','NCP', 'FCVC', 'CH2O', 'FAF', 'TUE']

# Round the float columns to two decimal places
df[colunas_float] = df[colunas_float].round(2)

df.duplicated().sum()

# Creating a new DataFrame containing only the duplicate rows
duplicated_df = df.loc[df.duplicated(keep=False), :]
duplicated_df.head(5)

# Droping duplicates
df = df.drop_duplicates()
df.shape



# Df Describe 
with pd.option_context(
    "display.float_format",
    "{:.2f}".format,
    "display.max_columns",
    None,
):
    print(df.describe())

# Calculate the Body Mass Index (BMI)
df['BMI'] = round(df['Weight'] / (df['Height']) ** 2, 2)
df.head(1)


# Plot categorical features graphs
plot_categorical_features(df, 'skyblue')

sns.boxplot(df)

# Create a copy of the original DataFrame
df_visu = df.copy()

# List of columns to be converted
columns = ['FCVC', 'NCP', 'CH2O', 'FAF', 'TUE']

# Iterate over each column and make the changes
for column in columns:
    df_visu[column] = df_visu[column].round().astype(int)
    
# Mapping of values for the columns
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

# Apply substitution according to the column
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
    'SCC' : 'Calories consumption monitoring (FAVC)',    
}


# Renaming the columns using the dictionary
df_visu.rename(columns=new_column_names, inplace=True)

# Taking just 5 first
new_column_names= dict(islice(new_column_names.items(), 5))

# Accessing the values (second items) of each key in the dictionary
column_values = [value for key, value in new_column_names.items()]

# Plotting only the 5 columns
plot_categorical_features(df_visu.loc[:, column_values], 'skyblue')

df_dummies = pd.get_dummies(df)

# Calculating correlation matrix 
correlation_matrix = df_dummies.corr()

# Plotting heatmap 
plt.figure(figsize=(18, 15))
sns.heatmap(correlation_matrix, annot=True, cmap='BuGn', fmt=".1f")
plt.title('Heatmap of Correlation Matrix', weight='bold', size=6)
plt.show()



# Selecting categorical features
categorical_features = df.select_dtypes(exclude="number").columns
categorical_features



# Reset the index
df.reset_index(inplace=True)

# Rename the index column to "ID"
df.rename(columns={'index': 'ID'}, inplace=True)

from sklearn.preprocessing import OneHotEncoder

# Categorical columns except the Target column
one_hot_cols = categorical_features[:-1]

# Selecting only categorical columns from the DataFrame
df_categorical = df[one_hot_cols]

# Applying OneHotEncoder
encoder = OneHotEncoder()
encoded_data = encoder.fit_transform(df_categorical)

# Obtaining names of the features generated by OneHotEncoder
one_hot_feature_names = encoder.get_feature_names_out(one_hot_cols)

# Creating a DataFrame with transformed features
df_encoded = pd.DataFrame(encoded_data.toarray(), columns=one_hot_feature_names)

# Joining DataFrames
df_final = pd.concat([df, df_encoded], axis=1)

# Dropping categorical columns
df_final.drop(columns=one_hot_cols, inplace=True)
df_final.drop('ID', axis=1, inplace=True)

# Visualizing the first few rows of the final DataFrame
df_final.head(5)

from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score, recall_score
from sklearn.metrics import confusion_matrix
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.tree import DecisionTreeClassifier
from lightgbm import LGBMClassifier

# Features
X = df_final.drop('NObeyesdad', axis=1)

# Target variable 
y = df_final['NObeyesdad']

# Split data into training and testing sets 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

from sklearn.metrics import recall_score, accuracy_score, precision_score



models = {
    "RandomForestClassifier": RandomForestClassifier(),
    "LGBMClassifier": LGBMClassifier(verbose=-1),
    "DecisionTreeClassifier": DecisionTreeClassifier(),
    "ExtraTreesClassifier": ExtraTreesClassifier(),
}

for model_name, model in models.items():
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    recall = recall_score(y_test, predictions, average='weighted')  
    accuracy = accuracy_score(y_test, predictions)
    precision = precision_score(y_test, predictions, average='weighted', zero_division=1) 
    
    print(f"Model: {model_name}")
    print(f"Recall: {recall}")
    print(f"Accuracy: {accuracy}")
    print(f"Precision: {precision}")
    print("-" * 50)

class_labels = ['Insuf', 'Normal', 'Obesi I', 'Obesi II', 'Obesi III', 'OverW I', 'OverW II']

# Create figure and axes
fig, axes = plt.subplots(1, len(models), figsize=(15, 3.5))

# Plot confusion matrix for each model
for ax, (model_name, model) in zip(axes, models.items()):
    predictions = model.predict(X_test)
    cm = confusion_matrix(y_test, predictions)
    sns.heatmap(cm, annot=True, fmt="d", cmap="Greens", cbar=False, ax=ax, 
                xticklabels=class_labels, yticklabels=class_labels)
    ax.set_title(f"{model_name}", weight='bold', size=13)
    ax.set_xlabel("Predicted")
    ax.set_ylabel("True")

# Adjust layout and show figure
plt.tight_layout()
plt.show()

from sklearn.metrics import roc_curve, auc


# Create subplots
fig, axs = plt.subplots(2, 2, figsize=(15, 10))

# Loop over each model and plot its ROC curve in a separate subplot
for idx, (model_name, model) in enumerate(models.items()):
    y_pred_prob = model.predict_proba(X_test)
    fpr = dict()
    tpr = dict()
    roc_auc = dict()
    for i in range(len(model.classes_)):
        fpr[i], tpr[i], _ = roc_curve(y_test == model.classes_[i], y_pred_prob[:, i])
        roc_auc[i] = auc(fpr[i], tpr[i])
        axs[idx // 2, idx % 2].plot(fpr[i], tpr[i], lw=2, label=f'{model.classes_[i]} (AUC = {roc_auc[i]:.3f})')
    axs[idx // 2, idx % 2].plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
    axs[idx // 2, idx % 2].set_xlabel('False Positive Rate')
    axs[idx // 2, idx % 2].set_ylabel('True Positive Rate')
    axs[idx // 2, idx % 2].set_title(f'ROC Curve One-vs-Rest (OvR) - {model_name}')
    axs[idx // 2, idx % 2].legend(loc='best')

# Adjust layout and show the figure
plt.tight_layout()
plt.show()