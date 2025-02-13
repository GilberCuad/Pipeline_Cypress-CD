pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Setup') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}
