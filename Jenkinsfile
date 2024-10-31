pipeline {
    agent any

    stages {
        stage('Build React') {
            steps {
                sh 'npm install'  // npm 패키지 설치
                sh 'npm run build' // React 프로젝트 빌드
            }
        }
        stage('Deploy React') {
            steps {
                // React 빌드 결과를 Tomcat의 정적 리소스 경로에 복사
                sh 'cp -R build/* /Users/jokangmin/Documents/Web/lib/apache-tomcat-9.0.93/webapps/react/' // Tomcat의 정적 리소스 경로
            }
        }
    }
}

