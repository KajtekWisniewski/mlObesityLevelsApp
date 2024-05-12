'use client';

import styles from '../generalStyles.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function ModelPage() {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.article}>
        <h1>Dokumentacja modelu</h1>
        <p>
          Model machine learningu wykorzystany do tego projektu został napisany z pomocą
          samouczka ze strony
          <a href="https://www.kaggle.com/code/tkunzler/obesity-levels-acc-98-eda/notebook">
            &nbsp;kaggle.
          </a>
        </p>
        <p>Strona poza dokumentacją jest w języku angielskim.</p>
        <h2>Plik: model_assesment.py</h2>
        <h2>Setup i wersje bibliotek</h2>
        <ul>
          <li>
            <strong>Użyte biblioteki:</strong> Pandas do korzystania z dataframe,
            Matplotlib i Seaborn do tworzenia wykresów, NumPy do operacji numerycznych
            oraz scikit-learn dla potrzeb machine learningu i tworzenia modelu.
          </li>
        </ul>

        <h2>Załadowanie danych i sprawdzenie datasetu</h2>
        <ul>
          <li>
            <strong>Załadowywanie danych</strong> The dataset{' '}
            <code>ObesityDataSet_raw_and_data_sinthetic.csv</code> ze strony kaggle jest
            przekonwertowywany w dataframe <code>df</code>.
          </li>
          <li>
            <strong>Preview danych oraz Shape:</strong> Pierwsze linijki kodu printują
            wygląd wykorzystanego zbioru danych
          </li>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Age</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Weight</th>
                <th>CALC</th>
                <th>FAVC</th>
                <th>FCVC</th>
                <th>NCP</th>
                <th>SCC</th>
                <th>SMOKE</th>
                <th>CH2O</th>
                <th>Family History with Overweight</th>
                <th>FAF</th>
                <th>TUE</th>
                <th>CAEC</th>
                <th>MTRANS</th>
                <th>NObeyesdad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21.0</td>
                <td>Female</td>
                <td>1.62</td>
                <td>64.0</td>
                <td>no</td>
                <td>no</td>
                <td>2.0</td>
                <td>3.0</td>
                <td>no</td>
                <td>no</td>
                <td>2.0</td>
                <td>yes</td>
                <td>0.0</td>
                <td>1.0</td>
                <td>Sometimes</td>
                <td>Public Transportation</td>
                <td>Normal Weight</td>
              </tr>
              <tr>
                <td>21.0</td>
                <td>Female</td>
                <td>1.52</td>
                <td>56.0</td>
                <td>Sometimes</td>
                <td>no</td>
                <td>3.0</td>
                <td>3.0</td>
                <td>yes</td>
                <td>yes</td>
                <td>3.0</td>
                <td>yes</td>
                <td>3.0</td>
                <td>0.0</td>
                <td>Sometimes</td>
                <td>Public Transportation</td>
                <td>Normal Weight</td>
              </tr>
              <tr>
                <td>23.0</td>
                <td>Male</td>
                <td>1.80</td>
                <td>77.0</td>
                <td>Frequently</td>
                <td>no</td>
                <td>2.0</td>
                <td>3.0</td>
                <td>no</td>
                <td>no</td>
                <td>2.0</td>
                <td>yes</td>
                <td>2.0</td>
                <td>1.0</td>
                <td>Sometimes</td>
                <td>Public Transportation</td>
                <td>Normal Weight</td>
              </tr>
              <tr>
                <td>27.0</td>
                <td>Male</td>
                <td>1.80</td>
                <td>87.0</td>
                <td>Frequently</td>
                <td>no</td>
                <td>3.0</td>
                <td>3.0</td>
                <td>no</td>
                <td>no</td>
                <td>2.0</td>
                <td>no</td>
                <td>2.0</td>
                <td>0.0</td>
                <td>Sometimes</td>
                <td>Walking</td>
                <td>Overweight Level I</td>
              </tr>
              <tr>
                <td>22.0</td>
                <td>Male</td>
                <td>1.78</td>
                <td>89.8</td>
                <td>Sometimes</td>
                <td>no</td>
                <td>2.0</td>
                <td>1.0</td>
                <td>no</td>
                <td>no</td>
                <td>2.0</td>
                <td>no</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>Sometimes</td>
                <td>Public Transportation</td>
                <td>Overweight Level II</td>
              </tr>
            </tbody>
          </table>
          <li>
            <strong>Dane organiczne i syntetyczne:</strong> Oddzielane są oryginalne
            dane od syntetycznie wygenerowanych danych do potencjalnie różnych analiz.
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`df_organic = df.head(498)

df_synthetic = df.iloc[498:]

print(df_organic.tail(3))
print(df_synthetic.head(3))

df_info = pd.DataFrame(df.dtypes, columns=['Dtype'])
df_info['Unique_Organic'] = df_organic.nunique().values
df_info['Unique_Synthetic'] = df_synthetic.nunique().values
df_info`}
          </SyntaxHighlighter>
        </ul>

        <h2>Czyszczenie danych i Preprocessing</h2>
        <ul>
          <li>
            <strong>Konwersja danych:</strong> Konwertowana jest kolumna „Age” na typ
            int w celu dopasowania danych do danych numerycznych
          </li>
          <li>
            <strong>Zaokrąglanie:</strong> Zaokrąglane są liczby zmiennoprzecinkowe w
            kilku kolumnach do dwóch miejsc po przecinku w celu zapewnienia spójności i
            lepszej obsługi podczas wizualizacji i modelowania.
          </li>
          <li>
            <strong>Obsługa duplikatów:</strong> Identyfikacja i usuwanie zduplikowanych
            wpisów aby zapewnić integralność zbioru danych.
          </li>
          <li>
            <strong>Statystyki opisowe: </strong> Drukuje statystyki opisowe danych
            danych, zapewniając wgląd w tendencję centralną, rozproszenie i kształt
            rozkładu zbioru danych.
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`#Converting the "Age" column to integer
df['Age'] = df['Age'].astype(int)

colunas_float = ['Height', 'Weight','NCP', 'FCVC', 'CH2O', 'FAF', 'TUE']

df[colunas_float] = df[colunas_float].round(2)

df.duplicated().sum()

duplicated_df = df.loc[df.duplicated(keep=False), :]
duplicated_df.head(5)

df = df.drop_duplicates()
df.shape

with pd.option_context(
    "display.float_format",
    "{:.2f}".format,
    "display.max_columns",
    None,
):
    print(df.describe())`}
          </SyntaxHighlighter>
        </ul>

        <h2>Dodatkowe features w danych</h2>
        <ul>
          <li>
            <strong>Kalkulacja wskaźnika BMI:</strong>Dodana zostala nowa kolumna „BMI”
            poprzez obliczenie wyliczenia na podstawie danych dotyczących wzrostu i
            wagi.
          </li>
          <li>
            <strong>Mapowanie i konwersja kategorii:</strong> Stosowane jest mapowanie
            do zmiennych kategorialnych w celu konwersji identyfikatorów numerycznych na
            znaczące nazwy kategorii, zwiększając możliwości interpretacji na potrzeby
            analizy i wizualizacji.
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`df['BMI'] = round(df['Weight'] / (df['Height']) ** 2, 2)
df.head(1)

plot_categorical_features(df, 'skyblue')

sns.boxplot(df)

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
    'SCC' : 'Calories consumption monitoring (FAVC)',    
}

df_visu.rename(columns=new_column_names, inplace=True)`}
          </SyntaxHighlighter>
        </ul>

        <h2>Wizualizacja Danych</h2>
        <ul>
          <li>
            <strong>Dane kategoryczne:</strong> Wizualizowane są dane kategoryczne za
            pomocą histogramu oraz boxplotu (kod znajduje się powyżej).
          </li>
          <li>
            <strong>Heatmap korelacji:</strong> Generowany jest heatmap macierzy
            korelacji w celu wizualizacji zależności między zmiennymi.
          </li>
          <p className={styles.labeling}>histogram danych</p>
          <Image
            src="/data_histogram.png"
            width={850}
            height={500}
            alt="histogram danych 1"
          />
          <Image
            src="/data_histogram_cont.png"
            width={850}
            height={500}
            alt="histogram danych 2"
          />
          <p className={styles.labeling}>bar plot</p>
          <Image
            src="/bar_plot.png"
            width={850}
            height={500}
            alt="histogram danych 2"
          />
          <p className={styles.labeling}>heatmap korelacji</p>
          <Image
            src="/correlation_matrix_heatmap.png"
            width={850}
            height={500}
            alt="correlation matrix heatmap"
          />
        </ul>

        <h2>Encoding danych oraz preparacja modelu</h2>
        <ul>
          <li>
            <strong>One-Hot Encoding:</strong> Stosowane jest kodowanie One-Hot do cech
            kategorialnych aby przekonwertować je do formatu odpowiedniego dla modeli
            machine learningu.
          </li>
          <li>
            <strong>Przygotowanie finałowego dataframe:</strong> Scala zakodowane dane z
            powrotem do DataFrame i usuwa oryginalne kolumny kategoryczne.
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`categorical_features = df.select_dtypes(exclude="number").columns
categorical_features

df.reset_index(inplace=True)

df.rename(columns={'index': 'ID'}, inplace=True)

#Usuniecie target columny - NObeyesdad
one_hot_cols = categorical_features[:-1]

df_categorical = df[one_hot_cols]

encoder = OneHotEncoder()
encoded_data = encoder.fit_transform(df_categorical)

one_hot_feature_names = encoder.get_feature_names_out(one_hot_cols)

df_encoded = pd.DataFrame(encoded_data.toarray(), columns=one_hot_feature_names)

df_final = pd.concat([df, df_encoded], axis=1)

#Usuwanie kolumn z kategoriami
df_final.drop(columns=one_hot_cols, inplace=True)
df_final.drop('ID', axis=1, inplace=True)`}
          </SyntaxHighlighter>
        </ul>

        <h2>Trenowanie modelów oraz ich ewaluacja</h2>
        <ul>
          <li>
            <strong>Trenowani modeli:</strong> Trenowanych są 4 modele uczenia
            maszynowego wykorzystujące klasyfikatory RandomForest, LightGBM,
            DecisionTree i ExtraTrees.
          </li>
          <li>
            <strong>Metryki wydajnościowe:</strong> Oblicza accuracy, recall i prezycje
            dla każdego modelu i drukuje wyniki.
          </li>
          <li>
            <strong>Confusion Matrix:</strong> Wykresy confusion matrix dla każdego
            modelu w celu wizualizacji wydajności w różnych klasach.
          </li>
          <li>
            <strong>ROC Curves:</strong> Wykresy krzywych ROC (Receiver Operating
            Characteristic) dla każdej klasy w ramach modeli w celu oceny kompromisów
            między odsetkiem wyników prawdziwie pozytywnych a odsetkiem wyników
            fałszywie pozytywnych.
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`
X = df_final.drop('NObeyesdad', axis=1)
y = df_final['NObeyesdad']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

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

fig, axes = plt.subplots(1, len(models), figsize=(15, 3.5))

for ax, (model_name, model) in zip(axes, models.items()):
    predictions = model.predict(X_test)
    cm = confusion_matrix(y_test, predictions)
    sns.heatmap(cm, annot=True, fmt="d", cmap="Greens", cbar=False, ax=ax, 
                xticklabels=class_labels, yticklabels=class_labels)
    ax.set_title(f"{model_name}", weight='bold', size=13)
    ax.set_xlabel("Predicted")
    ax.set_ylabel("True")

plt.tight_layout()
plt.show()

fig, axs = plt.subplots(2, 2, figsize=(15, 10))

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

plt.tight_layout()
plt.show()`}
          </SyntaxHighlighter>
          <p className={styles.labeling}>confusion matrix</p>
          <Image
            src="/4_models_confusion_matrix.png"
            width={850}
            height={500}
            alt="confusion matrix"
          />
          <p className={styles.labeling}>krzywe ROC</p>
          <Image
            src="/4_model_roc_curves.png"
            width={850}
            height={500}
            alt="roc curves"
          />
          <p className={styles.labeling}>przykładowe wyniki modeli</p>
          <SyntaxHighlighter language="python" style={dracula}>
            {`
Model: RandomForestClassifier
Recall: 0.9832535885167464
Accuracy: 0.9832535885167464
Precision: 0.9837455579810389
--------------------------------------------------
Model: LGBMClassifier
Recall: 0.9784688995215312
Accuracy: 0.9784688995215312
Precision: 0.9794222289578327
--------------------------------------------------
Model: DecisionTreeClassifier
Recall: 0.9688995215311005
Accuracy: 0.9688995215311005
Precision: 0.9692707410773025
--------------------------------------------------
Model: ExtraTreesClassifier
Recall: 0.9497607655502392
Accuracy: 0.9497607655502392
Precision: 0.9520403280929596
--------------------------------------------------`}
          </SyntaxHighlighter>
          <li>
            <strong>Wyniki:</strong> Najlepiej sprawdzającym się modelem jest zatem
            RandomForestClassifier i to on zostanie użyty do wytrenowania modelu. Osiąga
            wyniki nawet z ponad 99% accuracy.
          </li>
        </ul>

        <h2>Plik: ml_model.py</h2>
        <ul>
          <li>
            <strong>Wytrenowanie modelu</strong> Plik ml_model.py wykorzystuje kod
            stosowany do sprawdzenia który model najlepiej się będzie sprawdzał z
            wyłączeniem tworzenia wykresów i trenuje model na podstawie klasyfikatora
            RandomForestClassifier. Model jest trenowany w pętli aż nie osiągnie
            accuracy powyżej 99%. Następnie jest zapisywany wraz z encoderem do
            późniejszego wykorzystania.
          </li>
        </ul>

        <h2>Plik: model_functions.py</h2>
        <ul>
          <li>
            <strong>
              Wykorzystanie zapisanego modelu do sprawdzenia przekazanych przez strone
              danych
            </strong>
            funkcja predict otrzymuje dany przesłane przez API, następnie zamienia dane
            na pojedyńczy data frame, preprocessuje dane w ten sam sposób jak
            wykorzystywane były do trenowania modelu, do czego wykorzystuje również
            zapisany wraz z modelem encoder a następnie ewaluuje wynik za pomocą funkcji
            model.predict i zwraca wynik
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`def predict(age, gender, height, weight, CALC, FAVC, FCVC, NCP, SCC, SMOKE, CH20, family_history_with_overweight, FAF, TUE, CAEC, MTRANS): 
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
    return prediction[0]`}
          </SyntaxHighlighter>
        </ul>
        <h2>Plik: server.py</h2>
        <ul>
          <li>
            <strong>Plik API</strong> Plik server.py zawiera w sobie serwer flask
            obsługujący requesty
          </li>
          <li>
            <strong>endpointy</strong> API zawiera dwa routes, oba obsługujące requesty
            typu POST. Pierwszy endpoint to /result przyjmujący dane w odpowiedniej
            postaci a następnie wykorzystujący funkcję predict aby zwrócić wynik z
            modelu. Drugi endpoint to endpoint testowy sprawdzający czy serwer obsługuje
            poprawnie jakikolwiek request POST. (był potrzebny aby sprawdzić czy
            działają requesty z frontendu reacta przy pomocy CORS)
          </li>
          <SyntaxHighlighter language="python" style={dracula}>
            {`from flask import Flask, request, jsonify
from model_functions import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/api/result", methods=['POST'])
def how_many_accs():
    data = request.get_json()
    predicted_obesity = predict(data['age'], data['gender'], data['height'], data['weight'], data['CALC'], data['FAVC'], data['FCVC'], data['NCP'], data['SCC'], data['SMOKE'], data['CH2O'], data['family_history_with_overweight'], data['FAF'], data['TUE'], data['CAEC'], data['MTRANS'])
    return jsonify(predicted_obesity), 201

@app.route("/api/test", methods=['POST'])
def test_request():
    data = request.get_json()
    print(data)
    return jsonify(data), 201`}
          </SyntaxHighlighter>
        </ul>
      </div>
      <div className={styles.straightLine}></div>
    </div>
  );
}
