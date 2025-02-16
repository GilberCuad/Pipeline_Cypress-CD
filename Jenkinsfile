pipeline {
    agent any


    stages {
        stage('Checkout') {
            agent {
                label "Agent1_1"
            }
            steps {
                git 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
                bash 'npm install'
                bash 'npm update'
                bash 'npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b' 
            }
        }

        // stage('Checkout 2') {
        //     agent {
        //         label "Agent1_2"
        //     }
        //      steps {
        //         git 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
        //         sh 'npm install'
        //         sh 'npm update'
        //         sh 'xvfb-run --auto-servernum npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b --parallel'
        //     }
        // }

        // stage('Checkout 3') {
        //     agent {
        //         label "Agent1_3"
        //     }
        //      steps {
        //         git 'https://github.com/GilberCuad/Pipeline_Cypress-CD.git'
        //         sh 'npm install'
        //         sh 'npm update'
        //         sh 'xvfb-run --auto-servernum npx cypress run --record --key 7015d80b-b679-40ac-899e-afbc94a0012b'
        //     }
        // }
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
