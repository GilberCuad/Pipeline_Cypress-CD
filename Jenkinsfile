pipeline {
    agent any

    tools { nodejs "NodeJS" }

    stages {
        stage('Execution on parallel') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent1_1" }
                    steps {
                        checkout scm
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel' 
                    }
                }

                stage('Slave 1') {
                    agent { label "Agent1_1" }
                    steps {
                        checkout scm
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel' 
                    }
                }stage('Slave 2') {
                    agent { label "Agent1_1" }
                    steps {
                        checkout scm
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel' 
                    }
                }

            }
        }

        
    }

    post {
        failure {
            echo "Falló el pipeline. Revisa los logs en Jenkins."
        }
    }
}

