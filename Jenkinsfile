pipeline {
  agent{
    docker {
      image 'cypress/base:16.13.0'
    }
  }
stages {
    stage('Download the dependencies'){
      steps {
        sh "npm install"
      }
    }
  }

stages {
    stage('Build and test'){
      steps {
        sh "npm run build:and:test"
      }
    }
  }
}