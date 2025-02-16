pipeline {
    agent none

    tools { nodejs "NodeJS" }

    stages {
        stage('Execution on parallel') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent1_1" }
                    steps {
                        git url: 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
                        git branch: 'pipeline_cypress'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel' 
                    }
                }

                stage('Slave 2') {
                    agent { label "Agent1_2" }
                    steps {
                       git url: 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
                        git branch: 'pipeline_cypress'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel' 
                    }
                }
            }
        }

        // Ejemplo de otro stage comentado para usar en el futuro
        /*
        stage('Checkout 3') {
            agent { label "Agent1_3" }
            steps {
                git 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
                sh 'npm install'
                sh 'npm update'
                sh 'xvfb-run --auto-servernum npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b'
            }
        }
        */
    }

    post {
        always {
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*', fingerprint: true
        }
        failure {
            echo "⚠️ Falló el pipeline. Revisa los logs en Jenkins."
        }
    }
}

