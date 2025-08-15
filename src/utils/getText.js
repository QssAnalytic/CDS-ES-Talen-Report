export const getOverallGeneralText = ({ score, name, pronoun }) => {
  if (score <= 50) {
    return `Familiar with the wide range of data science/analytics software tools, their constraints, advantages, disadvantages and areas of application. Has intermediate skills in using at least one such tool. Has fundamental awareness of data cleaning, visualization, predictive analytics and machine learning algorithms. ${name} has experience working with data mining tools such as Tableau, SPSS, R, Python and SQL. Familiar with Big Data technologies including Spark, Hadoop and Map Reduce. Has knowledge of statistical methods and modelling techniques (predictive modelling, clustering, association rules etc.).`;
  } else if (score <= 60) {
    return `Has fully operational command of Tableau, SQL and SPSS Modeler software packages, data analytics expertise and capabilities as well as data cleaning, visualization and statistical analysis. Familiar with the wide range of data science programming languages, their constraints, advantages, disadvantages and areas of application. Has fundamental awareness  of machine learning and deep learning algorithms using most recent techniques in data science like XGBOOST, Prophet and FastAI. Familiar with Big Data technologies including Spark, Hadoop and Map Reduce. Generates actionable insights applying predictive statistical models, segmentation analysis, customer profiling analysis and data mining. Applies new ways for predicting and modelling end-user behavior.`;
  } else if (score <= 80) {
    return `Has fully operational command of R and Python programming languages, data science expertise and capabilities as well as data cleaning, visualization, statistical analysis, machine learning and deep learning algorithms using most recent techniques in data science like XGBOOST, Prophet and FastAI. ${name} has also experience working with data mining tools such as SPSS, Tableau, SQL and Big Data technologies including Spark, Hadoop and Map Reduce. Generates actionable insights applying predictive statistical models, segmentation analysis, customer profiling analysis and data mining. Applies new ways for predicting and modelling end-user behavior.`;
  } else if (score <= 100) {
    return `Has substantial experience working on full-life cycle data science as well as data cleaning, visualization, statistical analysis, visualization,predictive modelling, machine learning and deep learning algorithms. inclusive of linear and non-Linear regression, logistic regression, time series analysis using most recent techniques in data science like XGBOOST, Prophet and FastAI. ${name} has experience working with data mining tools such as Python, SPSS, R, Tableau, SQL and Big Data technologies including Spark, Hadoop and Map Reduce. ${pronoun} applies advanced statistical capabilities and delivers statistical models, for example, consumer predictive value, churn, segmentation and profiling, association models, and so forth.`;
  }
};

export const getOverallDataCleaningText = ({ score }) => {
  if (score <= 60) {
    return `Works with unstructured data and experience cleaning and manipulating data. Able to aggregate and cleans program data from multiple data files and sources easily, spots and corrects inaccuracies in the underlying data, interprets datasets and provides feedback. Applies a variety of visualization techniques and designs the content and appearance of data visuals.`;
  } else if (score <= 80) {
    return `Able to clean messy data and enable analytical capability in order to query the data and address various business needs.`;
  } else if (score <= 90) {
    return `Able to use advanced data cleaning techniques and approaches for a variety of data types such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.`;
  } else if (score <= 100) {
    return `Able to use all best-practice data cleaning techniques and approaches for a variety of data types such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.`;
  }
};

export const getOverallVisualizationText = ({ score }) => {
  if (score <= 50) {
    return `Selects appropriate visualization approach from a range of applicable options. Contributes to exploration and experimentation in data visualization.`;
  } else if (score <= 80) {
    return `Applies a variety of visualization techniques and designs the content and appearance of data visuals. Operationalizes and automates activities for efficient and timely production of data visuals. Selects appropriate visualization approach from a range of applicable options. Contributes to exploration and experimentation in data visualization.`;
  } else if (score <= 90) {
    return `Operationalizes and automates activities for efficient and timely production of data visuals. Selects appropriate visualization approach from a range of applicable options. Contributes to exploration and experimentation in data visualization.`;
  } else if (score <= 100) {
    return `Establishes the purpose and parameters of the data visualization. Provides overall control, to ensure appropriate use of data visualization tools and techniques. Formats and communicates results, using textual, numeric, graphical and other visualization methods appropriate to the target audience.`;
  }
};

export const getOverallProgrammingText = ({ score }) => {
  if (score <= 50) {
    return `Familiarity with R and Python programming languages. Ability to use R and Python code to test hypotheses, calculate correlations and to predict variables using classification and regression algorithms.`;
  } else if (score <= 80) {
    return `Able to use R or Python code to conduct diagnostic analytics tests in order to find significant relationships of features and to predict a variable using statistical and machine learning algorithms. Able to use R or Python code to ensemble models and apply advanced concepts such as bagging, boosting, regularization and hyperparameter tuning.`;
  } else if (score <= 100) {
    return `Able to use R or Python code to test hypotheses, conduct diagnostic analytics tests in order to find significant relationships of features and to predict a variable using statistical and machine learning algorithms. Able to use R or Python code to ensemble models and apply advanced concepts such as bagging, boosting, regularization and hyperparameter tuning.`;
  }
};

export const getDataCleaning = ({ score }) => {
  return {
    partOne: () => {
      if (score <= 50) {
        return `Knowledge of some basic data cleaning techniques and approaches such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.
        ;Ability to support the team with data cleaning of noisy and incomplete data using relevant tools and programming languages. 
        ;Develops understanding of why data requires cleaning, including the organizational context, and the implications of this for data science processes. 
        ;Ability to create required data set utilizing understanding of routine problems, data formats, applicability of the data to the problem and standard modelling techniques.
        Ability to fuse data sources using knowledge of data pre-processing techniques such as transformation, integration, normalization, feature extraction, to identify and apply appropriate methods.`;
      } else if (score <= 80) {
        return `Experience in utilizing a number of data cleaning techniques and approaches for structured and unstructured data such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.
        Ability to conduct data cleaning of noisy, incomplete data or data with established data quality issues using experience of relevant tools and programming languages. Utilizes knowledge of how the interaction of multiple data issues.
        ;Able to identify in which situations data may need to be scaled.
        Able to select the best way to handle missing values.
        Able to identify outliers and understand options to handle outliers.
        Able to understand the impact of working with unbalanced data.
        Able to construct a fully usable dataset.
        ;Ability to create required data sets utilizing understanding of the organizational problem, applicability of the data to the problem, data format and a range of modelling techniques.`;
      } else if (score <= 90) {
        return `Experience in utilizing a number of data cleaning techniques and approaches for structured and unstructured data such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.
        Experience in utilizing these for cleaning complex, large, incomplete data or data with established quality issues. Ability to design and implement data cleaning approaches for complex data and projects.
        ;Utilizes knowledge of how the interaction of multiple data issues. Able to identify in which situations data may need to be scaled.
        ;Able to select the best way to handle missing values.
        Able to identify outliers and understand options to handle outliers. 
        Able to understand the impact of working with unbalanced data.
        Able to construct a fully usable dataset. Ability to create required data sets utilizing understanding of the organizational problem, applicability of the data to the problem, data format and a range of modelling techniques.`;
      } else if (score <= 100) {
        return `Extensive knowledge of best-practice data cleaning techniques and approaches for a variety of data types such as data wrangling, batch processing, data mining, data enhancement, data harmonization and data standardization.
        ;Considerable experience in utilizing these for cleaning complex, large, incomplete data or data with established quality issues. Ability to design and implement data cleaning approaches for complex data and projects.
        ;In-depth knowledge of and experience in using a wide variety of more complex data manipulation and transformation techniques such as transformation, integration, normalization and feature extraction to fuse and reshape complex, multi-source data.
        ;Utilizes in-depth knowledge and experience of organizational problems, data formats and data modelling to lead the team in application of data manipulation techniques for large or complex projects.`;
      }
    },
    partTwo: () => {
      if (score <= 50) {
        return `Demonstrate an understanding of when/why data transformations are necessary. 
        Apply feature selection techniques. 
        Demonstrate understanding of techniques to clean data. 
        Demonstrate mastery of the pandas library for data transformation and manipulation. 
        Demonstrate expertise with slicing, indexing, sub-setting, and merging and joining datasets.`;
      } else if (score <= 80) {
        return ` Ability to fuse data sources using knowledge of a variety of data pre-processing techniques such as transformation, integration, normalization, feature extraction, to identify and apply appropriate methods.
        ;Demonstrate SQL skills for querying databases and joining tables.`;
      } else if (score <= 90) {
        return ``;
      } else if (score <= 100) {
        return `Demonstrate the ability to complete a data projects using all skills acquired up to this point: cleaning and transforming data and building a usable dataset. Build a report documenting decisions made on the data. Deliver a presentation sharing process and results.
        ;Demonstrate ability to work with data from multiple data sources: SQL Databases, NoSQL Databases. 
        Demonstrate ability to work with data in databases, csv, xlsx, sav and json files.`;
      }
    },
  };
};
export const getDataVisualization = ({ score }) => {
  if (score <= 60) {
    return `Ability to present insights to stakeholders utilizing experience in translating complex information into easy-to-understand language and ability to provide visual data summaries illustrating and supporting the insights. 

        ;Uses knowledge of a variety of data visualization software tools to select the right option for the data and stakeholders.
        
        ;Understands audience and tailors communication to the audience.
        
        ;Demonstrate ability to visualize data for statistical analysis: histograms, box plots, scatterplots and etc. 
        Demonstrate ability to visualize data for insight sharing with nontechnical users.
        Demonstrate the ability to turn data insight into business value. 
        Demonstrate the ability to adapt final deliverables and presentations based on the audience.`;
  } else if (score <= 90) {
    return `Ability to present insights to the stakeholders for large or complex projects and gain business validation utilising extensive communications and influencing skills and experience in conveying complex information in easy-to-understand language. 

        ;Experience in identifying the best visualisation tool based on detailed knowledge of the data, organisational context and data analytics capability. Significant understanding of a wide variety of audiences and strong ability to tailor communication to their needs. 
        
        ;Demonstrate expertise with Tableau Desktop, Server and Reader tools and familiar with famous Tableau visualization libraries. Demonstrate ability to visualize data for statistical analysis using advanced dashboard and versatile graphical techniques. Demonstrate ability to visualize data for insight sharing with nontechnical users. 
        Demonstrate the ability to turn data insight into business value. 
        Demonstrate the ability to adapt final deliverables and presentations based on the audience.
        `;
  } else if (score <= 100) {
    return `Ability to present insights to the stakeholders for large or complex projects and gain business validation utilising extensive communications and influencing skills and experience in conveying complex information in easy-to-understand language. 

        ;Experience in identifying the best visualisation tool based on detailed knowledge of the data, organisational context and data analytics capability. Significant understanding of a wide variety of audiences and strong ability to tailor communication to their needs. 
        
        ;Demonstrate expertise with Tableau Desktop, Server and Reader tools and familiar with famous Tableau visualization libraries. Demonstrate ability to visualize data for statistical analysis using advanced dashboard and versatile graphical techniques. Demonstrate ability to visualize data for insight sharing with nontechnical users. 
        Demonstrate the ability to turn data insight into business value. 
        Demonstrate the ability to adapt final deliverables and presentations based on the audience.
        `;
  }
};
export const getDataModelling = ({ score }) => {
  return {
    partOne: () => {
      if (score <= 50) {
        return `Awareness of statistical methods and modelling techniques (supervised and unsupervised machine learning algorithms, such as classification and regression models, clustering, association rules etc). 
  
      ;Experience in using modelling techniques to predict categorical, numerical and time series values. Awareness of the necessity of this stage, its objectives, time and resource requirements. High-level awareness of a wide range of core data science / analytics techniques, their advantages, disadvantages and areas of application. Ability to assist in monitoring predictive performance of the model to ensure it is up to date and delivering valid results. Develops knowledge of current data science / analytics trends.`;
      } else if (score <= 60) {
        return `Knowledge of statistical methods and modelling techniques (supervised and unsupervised machine learning algorithms, such as classification and regression models, clustering, association rules etc). 

        ;Experience in using modelling techniques to model structured, uncomplicated data. Ability to source additional information, ideas and solutions through a variety of sources such as research and relevant libraries. 
        
        ;Uses familiarity with an increasing number of advanced modelling  techniques  such as bagging, boosting, regularization and hyperparameter tuning  in order to boost predictive power. 
        
        ;Experience in machine learning algorithms such as linear regression, decision trees and  recent techniques like Random Forest and XGBOOST and Keras. 
        
        ;Understands the data, and performance requirements for the problem to select the best technique. 
        
        ;Develops ability to identify the cause of errors, such as the impact of outliers , and works logically to identify potential solutions. 
        Develops knowledge of current data science/analytics trends.`;
      } else if (score <= 80) {
        return `Knowledge of statistical methods and advanced machine learning techniques (supervised and unsupervised learning algorithms, such as classification and regression models, advanced clustering, association rules etc). 

        ;Experience in using modelling techniques to model structured, uncomplicated data. Ability to source additional information, ideas and solutions through a variety of sources such as research and relevant libraries. 
        
        ;Ability to apply advanced methods such as bagging, boosting and regularization in order to boost predictive power. Able to apply hyperparameter tuning and to optimize deep learning algorithms using gradient descent methods. Experience in machine learning algorithms and frameworks such as decision trees and recent techniques like Random Forest, XGBOOST, CATBoost, LightGBM, Prophet, Neural Prophet, FastAI, Keras and Pytorch. 
        
        ;Understands the data, and performance requirements for the problem to select the best technique. Develops ability to identify the cause of errors, such as the impact of outliers , and works logically to identify potential solutions. Develops knowledge of current data science/analytics trends. 
        
        ;Ability to assist in monitoring predictive performance of the model to ensure it is up to date and delivering valid results.`;
      } else if (score <= 90) {
        return `Knowledge of a wide range of statistical methods and best-practice advanced modelling techniques (for example, predictive modelling using supervised and unsupervised  machine learning algorithms, such as classification and regression models, advanced clustering, text mining, social network analysis, association rules etc). 

        ;Experience in experimenting with, selecting and developing the modelling techniques most suitable for the organisational objective, organisational context and increasingly complex, unstructured and multiple data sets (for example including different types of data such as streaming data, raw text data). Ability to  apply advanced methods such as bagging, boosting and regularization in order to boost predictive power. 
        
        ;Able to apply hyperparameter tuning and to optimize deep learning algorithms using gradient descent methods. Chooses the technique optimal for the task (for example, linear and non-Linear regression, logistic regression, time series analysis, recent frameworks and techniques like Random Forest, XGBOOST, CATBoost, LightGBM, Prophet, Neural Prophet, FastAI, Keras and Pytorch.)  based on knowledge of the data and the technique’s constraints, assumptions, interpretability, robustness and application. 
        
        ;Understanding of business requirements and constraints including potential trade-offs between speed and accuracy. Maintains knowledge of data science trends. Ability to apply deployment techniques and monitor predictive performance of the model or set of models to ensure it is up to date and delivering valid results.`;
      } else if (score <= 100) {
        return `Extensive knowledge of a range of best-practice advanced modelling techniques (for example, text mining, social network analysis, predictive modelling, advanced clustering, association rules etc). Significant experience in selecting and combining modelling techniques that are most likely to deliver maximal accuracy and clarity of insight for a complex organisational objective and context. 

        ;Experience in building accurate, valid and efficient modelling solutions using a variety of complex data types (for example, streaming data, raw text data etc). Design and supervise the design of Data Science/Analytics solution for large or complex projects. Chooses the technique optimal for the task (for example, decision trees, advanced regression techniques, random forests etc.) based on detailed knowledge of the data and the technique’s constraints, assumptions, interpretability, robustness and areas of application from a wide range of best-practice Data Science/Analytics techniques.
        
        ;Utilises understanding of organisational context to negotiate performance requirements and implementation of best-practice solutions.Able to construct linear and non-Linear regression, logistic regression, time series analysis models using most recent frameworks and techniques in data science like XGBOOST, CATBoost, LightGBM, Prophet, Neural Prophet, FastAI, Keras and Pytorch. Able to apply advanced hyperparameter tuning and optimize deep learning algorithms using gradient descent methods.`;
      }
    },
    partTwo: () => {
      if (score <= 50) {
        return;
      } else if (score <= 60) {
        return `Ability to assist in monitoring predictive performance of the model to ensure it is up to date and delivering valid results.`;
      }
    },
  };
};

export const getDataProgramming = ({ score }) => {
  return {
    partOne: () => {
      if (score <= 50) {
        return `Familiarity with the wide range of mainstream commercial and open source data science / analytics software tools, their constraints, advantages, disadvantages and areas of application. Fundamental skills in R and Python programming languages used for data science/analytics and ability to apply these for data acquisition, preprocessing and modelling. 

        ;Demonstrate the ability to build Python code using variables, relational operators, logical operators, loops, and functions. Read and write data from csv and json files. Use data structures such as lists, tuples, sets, and dictionaries. 
        Demonstrate knowledge of NumPy, Matplotlib, SciPy, Seaborn and Scikit Learn libraries. Able to use Git repositories. 
        
        ;Familiarity with big data technologies, methods of analysis and relevant software tools. 
        
        ;Understand the concepts and major applications of distributed and cloud computing paradigm. Demonstrate knowledge of the big data ecosystems.`;
      } else if (score <= 60) {
        return `Familiarity with the wide range of data science/analytics commercial and open source software tools, their constraints, advantages, disadvantages, areas of application and mainstream packages relevant to technical stages of data science/analytics projects. 

        ;Intermediate skills in programming languages used for data science/analytics (R or Python) and ability to apply these for data acquisition, preprocessing, modelling and model deployment. Demonstrate the ability to build Python code using variables, relational operators, logical operators, loops, and functions. Read and write data from csv and json files. Use data structures such as lists, tuples, sets, and dictionaries. 
        
        ;Demonstrate knowledge of NumPy, Matplotlib, SciPy, Seaborn, Scikit Learn, DPLYR, HIGHCHARTER and H2O libraries. Able to use Git repositories. Familiarity of big data technologies, methods of analysis and relevant software tools. Understand the concepts and major applications of distributed and cloud computing paradigm. Demonstrate knowledge of the big data ecosystems.`;
      } else if (score <= 80) {
        return `Familiarity with the wide range of mainstream commercial and open source data science/analytics software tools, their constraints, advantages, disadvantages and areas of application. 

        ;Advanced skills in programming languages used for data science/analytics (R or Python). Ability to apply these for data acquisition, preprocessing, modelling and model deployment. 
        
        ;Master descriptive statistics Python code calculating mean, median, mode, standard deviation, percentiles and identifying outliers. 
        
        ;Use Python code to test hypothesis, calculate correlations and to predict a continuous or categorical variables using machine learning and deep learning methods. 
        
        ;Able to validate regression assumptions, evaluate performance of algorithms and deploy models. 
        
        ;Familiarty of big data technologies, the specifics of integrating them with existing information systems and using them for data science/analytics solutions.`;
      } else if (score <= 90) {
        return `Familiarity with the wide range of data science/analytics commercial and open source software tools, their constraints, advantages, disadvantages, areas of application and mainstream packages relevant to technical stages of data science/analytics projects. Intermediate to advanced skills in programming languages used for data science/analytics (R or Python) and ability to apply these for data acquisition, preprocessing, modelling and model deployment.
        
        ;Demonstrate the ability to build Python code using variables, relational operators, logical operators, loops, and functions. 
        Read and write data from csv and json files. Use data structures such as lists, tuples, sets, and dictionaries. Demonstrate knowledge of NumPy, Matplotlib, SciPy, Seaborn, Scikit Learn, TensorFlow and PyTorch and Fastai  libraries. Able to use Git repositories. 
        
        ;Familiarity of big data technologies, methods of analysis and relevant software tools. 
        
        ;Ability to identify a big data problem and select the appropriate big data technologies for a problem, using a variety of technologies in a ‘big data’ environment. 
        
        ;Demonstrate knowledge of how each major component in the big data ecosystems works (HDFS, YARN, MapReduce, Spark, Pig, Hive, Flume, Flink, Kafka, etc.)`;
      } else if (score <= 100) {
        return `Familiarity with the wide range of data science/analytics commercial and open source software tools, their constraints, advantages, disadvantages, areas of application and mainstream packages relevant to technical stages of data science/analytics projects.  

        ;Advanced skills in programming languages used for data science/ analytics (R or Python). Ability to apply these for data acquisition, preprocessing, modelling and model deployment. 
        
        ;Master descriptive statistics Python code calculating mean, median, mode, standard deviation, percentiles and identifying outliers.
        
        ;Use Python code to test hypothesis, calculate correlations and to predict a continuous or categorical variables using machine learning and deep learning methods.  
        
        ;Able to validate regression assumptions, evaluate performance of algorithms and deploy models. 
        
        ;Familiarity of big data technologies, the specifics of integrating them with existing information systems and using them for data science/analytics solutions.`;
      }
    },
    partTwo: () => {
      if (score <= 50) {
        return "";
      } else if (score <= 60) {
        return "";
      } else if (score <= 80) {
        return `Intermediate skills in programming languages used for data science/analytics (R or Python) and ability to apply these for data acquisition, preprocessing, modelling and model deployment. 
        
        ;Demonstrate the ability to build Python code using variables, relational operators, logical operators, loops, and functions. Read and write data from csv and json files. Use data structures such as lists, tuples, sets, and dictionaries. 
        Demonstrate knowledge of NumPy, Matplotlib, SciPy, Seaborn, Scikit Learn, TensorFlow, PyTorch and Fastai libraries. Able to use Git repositories. 
        
        ;Familiarity of big data technologies, methods of analysis and relevant software tools. Ability to identify a big data problem and select the appropriate big data technologies for a problem, using a variety of technologies in a ‘big data’ environment. 
        
        ;Demonstrate knowledge of how each major component in the big data ecosystems works (HDFS, YARN, MapReduce, Spark, Pig, Hive, Flume, Flink, Kafka, etc.). 
        Demonstrate hands-on experience with HDFS, MapReduce, Spark, Pig, Hive. Ability to design and implement a multi-stage solution that encapsulates systems dealing with both structured and unstructured data. 
        
        ;Ability to lead a team in deploying large-scale or multi-stage models or model ensembles utilising extensive knowledge of existing infrastructure, architecture and big data technologies. 
        
        ;Utilises collaboration skills, in depth knowledge of the problem and organizational context to develop innovative user interfaces and support use of the model.`;
      } else if (score <= 90) {
        return `Demonstrate knowledge of how each major component in the big data ecosystems works (HDFS, YARN, MapReduce, Spark, Pig, Hive, Flume, Flink, Kafka, etc.) 
        
        ;Demonstrate hands-on experience with HDFS, MapReduce, Spark, Pig, Hive. 
        
        ;Ability to design and implement a multi-stage solution that encapsulates systems dealing with both structured and unstructured data. 
        
        ;Ability to lead a team in deploying large-scale or multi-stage models or model ensembles utilising extensive knowledge of existing infrastructure, architecture and big data technologies.
        
        ;Utilises collaboration skills, in depth knowledge of the problem and organizational context to develop innovative user interfaces and support use of the model.`;
      } else if (score <= 100) {
        return `Ability to design and lead data science/ analytics projects including creation of a big data environment by setting up and deploying tools, capturing and evaluating results and deploying big data solutions on large scale data sets in the enterprise. 
        Ability to lead a team in identifying a big data problem, selecting the adequate techniques and performing data acquisition, data audit, cleaning, preprocessing, model development & testing and deployment. 
        
        ;Demonstrate knowledge of how each major component in the big data ecosystems works (HDFS, YARN, MapReduce, Spark, Pig, Hive, Flume, Flink, Kafka, etc.).
        Demonstrate hands-on experience with HDFS, MapReduce, Spark, Pig, Hive. 
        
        ;Ability to design and implement a multi-stage solution that encapsulates systems dealing with both structured and unstructured data. 
        Ability to lead a team in deploying large-scale or multi-stage models or model ensembles utilising extensive knowledge of existing infrastructure, architecture and big data technologies. 
        
        ;Utilises collaboration skills, in depth knowledge of the problem and organizational context to develop innovative user interfaces and support use of the model.`;
      }
    },
  };
};

export const getCognitiveCapabilityText = ({
  problemSolving,
  criticalThinking,
  name,
}) => {
  const score = (problemSolving + criticalThinking) / 2;
  if (score <= 80) {
    return `${name} has an analytical and systematic data approach to issue resolution,`;
  } else if (score <= 100) {
    return `Demonstrates an analytical and systematic data approach to issue resolution,`;
  }
};

export const getIntropersonalText = ({
  communication,
  leadership,
  pronoun,
}) => {
  const score = (communication + leadership) / 2;
  if (score <= 60) {
    return `engages or works with data specialists as necessary.`;
  } else if (score <= 80) {
    return `interacts with and may influence immediate colleagues.`;
  } else if (score <= 100) {
    return `${pronoun} demonstrates leadership and engages or works with data specialists as necessary.`;
  }
};

export const getCognitiveText = ({
  problemSolving,
  criticalThinking,
  pronoun,
}) => {
  const score = (problemSolving + criticalThinking) / 2;
  if (score <= 60) {
    return `May contribute to routine issue resolution. Is expected to seek guidance in unexpected situations.`;
  } else if (score <= 80) {
    return `${pronoun} may investigate, define and resolve complex issues. Understands the relationship between own specialism and wider customer/organizational requirements.`;
  } else if (score <= 100) {
    return `Investigates, defines and resolves complex issues. Understands the relationship between own specialism and wider customer/organizational requirements.`;
  }
};
export const getOverallCommunicationText = ({ score }) => {
  if (score <= 50) {
    return `Can present information to both technical and nontechnical audiences.`;
  } else if (score <= 60) {
    return `Can present complex information to both technical and nontechnical audiences.`;
  } else if (score <= 100) {
    return `Communicates effectively, both formally and informally and responding to complex issues and assignments.`;
  }
};
export const getOverallLeadershipText = ({ score }) => {
  if (score <= 50) {
    return `Makes decisions which impact the success of assigned work, i.e. results, deadlines and budget. Ability to learn and ask questions about new approaches, perspectives, tools and techniques. May supervise others or make decisions which impact the work assigned to individuals or phases of projects. Is able to work in a team. Aware of need to collaborate with team and represent users/customer needs. May have some external contact with customers, suppliers and partners.`;
  } else if (score <= 60) {
    return `Makes decisions which impact the work of employing organisations, achievement of organisational objectives and financial performance. Analyses requirements and advises on scope and options for continuous operational improvement. 

    ;Takes all requirements into account when making proposals. May supervise others or make decisions which impact the work assigned to individuals or phases of projects. Is able to work in a team. 
    
    ;Aware of need to collaborate with team and represent users / customer needs. May have some external contact with customers, suppliers and partners.`;
  } else if (score <= 100) {
    return `Makes decisions which impact the work of employing organisations, achievement of organisational objectives and financial performance. Analyses requirements and advises on scope and options for continuous operational improvement. 

    ;Takes all requirements into account when making proposals. Mentors colleagues. Proactively ensures business problems is appropriately addressed within their area by self and others. Understands and collaborates on the analysis of user/customer needs and represents this in their work.`;
  }
};

export const getCommunicationText = (score) => {
  if (score <= 60) {
    return `Listens genuinely and patiently without interrupting, and asks appropriate questions to acknowledge the underlying state/issues. Consistently checks for understanding. Thinks through what the messages need to be, and messages it to appropriate audiences in a timely way. Sends messages that are accurate, clear and timely, and uses good judgment regarding who needs to be communicated to, and influenced. Articulates and summarizes the appropriate pros and cons of the issue.`;
  } else if (score <= 100) {
    return `Listens willingly and interprets both verbal and nonverbal messages, and offers ideas and applicable insight. Consistently checks for understanding. Thinks through what the messages need to be, and messages it to appropriate audiences in a timely way. Sends messages that are accurate, clear and timely, and uses good judgment regarding who needs to be communicated to, and influenced. Articulates and summarizes the appropriate pros and cons of the issue.`;
  }
};

export const getProblemSolvingText = (score) => {
  if (score <= 80) {
    return `Ability to consider an issue from different perspectives and question information validity and assumptions. Ability to work systematically through a problem, use research skills to identify potential solutions from a variety of sources and knowledge of Data Science / Analytics techniques to assist the team to interpret data and analyse business environments. Ability to learn and ask questions about new approaches, perspectives, tools and techniques.`;
  } else if (score <= 100) {
    return `Ability to critically evaluate complex business information from multiple perspectives, including questioning assumptions and validity. Ability to identify relevant information from a wide variety of sources and use research skills and data science/ analytics techniques to interpret data, analyse business environments, and develop advanced solutions for real world problems. Ability to maintain an openness to new approaches, seek different perspectives and experiment with new techniques. Ability to adapt or develop new methods, techniques and learn new software packages as available in the literature and recent publications.`;
  }
};

export const getCriticalThinkingText = (score) => {
  if (score <= 80) {
    return `Consistently analyzes an issue from different points of view, and integrates data from various sources to identity key root causes. Analyzes data and issues from different perspectives and leverages lessons learned to come up with a practical solution/ recommendation. Interprets the meaning of the data and develops fact-based arguments which influence organizational decisions.`;
  } else if (score <= 100) {
    return `Intuitively grasps the concept or root causes quickly even with incomplete or ambiguous information. Consistently leads the development of a vision and/or strategy and masterfully integrates data from various sources to arrive at optimal solutions including alternatives that will benefit key stakeholders/decision makers. Analyzes data and issues from multiple points of view, and leverages lessons learned and best practices to come up with a practical solution/ recommendation. Interprets the meaning and implications of the data quickly, and develops fact-based arguments which influence organizational decisions.`;
  }
};

export const getLeadershipText = (score) => {
  if (score <= 60) {
    return `Acts with Integrity and professionalism in all work situations, including dealing with crisis or conflict situations. Effectively utilizes available resources.

    ;Effectively engages In conflict situations and works collaboratively to resolve differences. Understands others' priorities, needs and concerns. and actively encourages/open to new ideas and input while effectively overcoming resistance . Is an effective follower who fully supports what's needed and expected by the organization.
    
    ;Takes initiative to share critical knowledge and expertise. and demonstrates openness and approachability in working with colleagues. Consistently makes time for others, and provides opportunities for individual and team development.`;
  } else if (score <= 100) {
    return `Shows ability to maintain integrity and "do the right thing" where others may have difficulty or are resistant when there are differences in opinion. ls able to effectively influence others without formal authority.
    
    ;Mitigates/expedites resolution of conflict in challenging situations that result in building needed levels of consensus and commitment.
    Takes time to understand and study what has worked and why. Creatively integrates the ideas and perspectives of others to create the best approach while establishing 'buy in' of other team members.
    
    ;Proactively codifies and documents experience and critical knowledge learned and truly understands and values the impact of one's own behavior on others. Consistently coaches others to maximize their growth while offering both short-term and long term perspectives.`;
  }
};
