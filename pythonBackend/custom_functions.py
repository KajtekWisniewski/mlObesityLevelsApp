import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


def plot_categorical_features(df, color):
    # Identify categorical columns in the DataFrame
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns
    
    # Setting up the plot grid
    num_plots = len(categorical_cols)
    cols = 3  # Number of columns in plot grid
    rows = (num_plots + cols - 1) // cols  # Calculate number of rows needed
    fig, axs = plt.subplots(rows, cols, figsize=(cols*5, rows*5))
    axs = axs.flatten()  # Flatten the axes array for easier iteration
    
    # Plot each categorical feature
    for i, col in enumerate(categorical_cols):
        sns.countplot(x=df[col], ax=axs[i], color=color)
        axs[i].set_title(col)
        axs[i].set_xlabel('')
        axs[i].set_ylabel('Count')
        axs[i].tick_params(axis='x', rotation=45)
    
    # Hide unused axes
    for ax in axs[len(categorical_cols):]:
        ax.axis('off')
    
    plt.tight_layout()
    plt.show()

def plot_numerical_features(df, color_hist, color_box):
    # Identify numerical columns in the DataFrame
    numerical_cols = df.select_dtypes(include=['int64', 'float64']).columns
    
    # Setting up the plot grid
    num_plots = len(numerical_cols)
    cols = 2  # Number of columns in plot grid for each feature: one for histogram, one for boxplot
    rows = num_plots  # One row per feature
    fig, axs = plt.subplots(rows, cols, figsize=(cols*5, rows*5))
    
    if rows == 1:  # Adjust for a single numerical feature to avoid indexing error
        axs = [axs]
        
    # Plot each numerical feature
    for i, col in enumerate(numerical_cols):
        # Histogram
        sns.histplot(df[col], ax=axs[i][0], color=color_hist, kde=True)
        axs[i][0].set_title(f'Histogram of {col}')
        axs[i][0].set_xlabel(col)
        axs[i][0].set_ylabel('Frequency')

        # Boxplot
        sns.boxplot(x=df[col], ax=axs[i][1], color=color_box)
        axs[i][1].set_title(f'Boxplot of {col}')
        axs[i][1].set_xlabel(col)
        axs[i][1].set_ylabel('Value')

    plt.tight_layout()
    plt.show()