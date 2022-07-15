pipeline{

// agent any

agent {
  label 'agent2'
} 

// agent {
//   label '!agent1'
// } 


environment{
  PROJECT_NAME = "Volt MX Document External Server"
}

  // options{
  //     buildDiscarder(logRotator(numToKeepStr: "10"))    
  // }

  stages{
      stage('Build'){
        steps{
          echo "volt-mx-doc-opnsrc - repository is clonned from git scm to local"
          echo "workspace used in this job is: ${env.WORKSPACE}"
          sh "echo present working directory"
          sh "pwd"
          sh "git status"              
          
   
          //-------
          // note: cherry-pick PRs from 'master' branch to 'rel/HPHX' branch created from "release" branch , and publish/push changes from this branch "rel/HPHX" to remote. 
          // note: before above step, PRs should be ready in master branch
          // note: for testing, create a branch "rel1" in master branch, do the changes, cherrypick commit from "rel1" to "rel/HPHX" branch created in release.
          // sh "git checkout -b rel/HPHX"          
          //-------
          
          // ------- fetch branches from remote ------- 
          echo "fetch branches from remote.."
          sh "git fetch origin rel/HPHX:rel/HPHX"
          // sh "git fetch origin Doc-Revamp-Release:Doc-Revamp-Release"
          
          
          
          //-------
          //sh "git checkout rel/HPHX"
          //sh "git push origin rel/HPHX"
          //-------
          
          echo "checkout to release branch"
          sh "git checkout release"
          sh "git fetch origin release"
          sh "git pull origin release"
          
          sh "git merge rel/HPHX"
          //sh "git merge Doc-Revamp-Release"
          sh "git pull origin release"
          sh "git push origin release"
          
          echo "changing to source directory.."
          dir("${env.WORKSPACE}/source"){
              sh "pwd"
              sh "git status"
              sh "ruby -v"
              sh "which ruby"
              sh "echo Building VoltMX Docs Site.."
              sh "sh buildDocs.sh" 
              echo "Build completed Successfully"
          }
          echo "copying files from _site to docs folder.."
          sh "cp -R ${WORKSPACE}/source/_site/*  ${WORKSPACE}/docs"
          echo "files Successfully copied to target location.."
          echo "Committing the Changes..."
          sh('git add .')
          sh('git commit --allow-empty -am "Release Build"')
          sh('git pull origin release')
          sh('git push origin release')
          
          // ----- creating a new feature branch -----
          //sh "git status"
         //sh "git checkout -b feature/HPHX"
          
          // -- Test for any conflicts in remote, by pusblishing this branch to remote ----
          //sh "git push volt-mx-docs feature/HPHX"  
          
          // --- check the list of branches and the current checked out branch --
          // sh "git branch"
          
          // ---- listing the remotes ----
          //sh "git remote -v"
          
          //--- checkout to volt-mx-docs master branch, fetch and pull ----
          //sh "git checkout volt-mx-docs/master"
          //sh "git fetch volt-mx-docs master:volt-mx-docs/master --update-head-ok"
          //sh "git pull volt-mx-docs master"
          
          //----- merging changes from branch 'feature/HPHX' to branch 'volt-mx-docs master' ----
          //sh "git merge feature/HPHX"
          
           // ---- pushing the changes to remote volt-mx-docs master ----
          //sh "git pull volt-mx-docs master"
          //sh "git push volt-mx-docs master"
          
          // ----------------------------------------------------//
          sh "git status"
          sh "git checkout -b feature/HPHX"
          sh "git push volt-mx-docs feature/HPHX"
          sh "gh pr create -t 'Merging changes done for doc build email notifications test' -b 'Merging changes done for doc build email notifications test'"
          sh "gh pr status"
          sh "gh pr merge --merge"
          sh "git checkout master"
          sh "git status"
          sh "git branch -D feature/HPHX"
 
          
          //emailext attachLog: true, body: "${env.PROJECT_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.currentResult}: Check console output at ${env.BUILD_URL} to view the results.", replyTo: 'vishwanathan.m@hcl.com', subject: "${env.PROJECT_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.currentResult}!", to: 'vishwanathan.m@hcl.com'
        }
      }
  
  }
  post {
        success{
            echo "Build result is ${currentBuild.currentResult} !"
        }
        failure{
            echo "Build result is ${currentBuild.currentResult}. Please check the console logs to re-run the build"
        }
        always{
          echo " ----------- Build Details ----------- "
          echo "Build Number: ${env.BUILD_NUMBER}"
          echo "Build Result: ${currentBuild.currentResult}"
           script{
             def author_name = sh script: "git show -s --pretty=\"%an\" ${GIT_COMMIT}", returnStdout: true  
             def author_email_id = sh script: "git show -s --pretty=\"%ae\" ${GIT_COMMIT}", returnStdout: true  		 
             def commit_hash = sh script: "git show -s --pretty=\"%h\" ${GIT_COMMIT}", returnStdout: true  		 
             def commit_date = sh script: "git show -s --pretty=\"%ar\" ${GIT_COMMIT}", returnStdout: true 		 
             def commit_message = sh script: "git show -s --pretty=\"%s\" ${GIT_COMMIT}", returnStdout: true     
             def commit_message2 = sh script: "git show -s --pretty=\"%b\" ${GIT_COMMIT}", returnStdout: true     
             emailext attachLog: true, compressLog:true, body:"<p>*******************************************************************</p><h2>${env.PROJECT_NAME} - Build Status: </h2><table><tr><th>Build Number: </th><td><code>${env.BUILD_NUMBER}</code></td></tr><tr><th>Build Status: </th><td><code>${currentBuild.currentResult}</code></td></tr><tr><th>Author Name: </th><td><code>${author_name}</code></td></tr><tr><th>Author Email Id: </th><td><code>${author_email_id}</code></td></tr><tr><th>Changes: </th><td><code>${commit_message}</code></td></tr><tr><th>Change Description: </th><td><code>${commit_message2}</code></td></tr><tr><th>Committed Time: </th><td><code>${commit_date}</code></td></tr><tr><th>Commit Hash ID: </th><td><code>${commit_hash}</code></td></tr><tr><th>Build Duration: </th><td><code>${currentBuild.durationString}</code></td></tr></table><p>Please check the attached build logs and output to view the results in detail.</p><p>Verify your changes published externally from this base URL: <br>https://opensource.hcltechsw.com/volt-mx-docs/ .</p><p>*******************************************************************</p>", replyTo: 'vishwanathan.m@hcl.com', subject: "${env.PROJECT_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.currentResult}!", to: 'vishwanathan.m@hcl.com'
            }
          //emailext attachLog: true, compressLog:true, body: "<p>*******************************************************************</p><h2>${env.PROJECT_NAME} - Build Status: </h2><table><tr><th>Build Number: </th><td><code>${env.BUILD_NUMBER}</code></td></tr><tr><th>Build Status: </th><td><code>${currentBuild.currentResult}</code></td></tr></table><p>Please check the attached build logs and output to view the results in detail.</p><p>Verify your changes published externally from this base URL: <br>https://opensource.hcltechsw.com/volt-mx-docs/ .</p><p>*******************************************************************</p>", replyTo: 'vishwanathan.m@hcl.com', subject: "${env.PROJECT_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.currentResult}!", to: 'vishwanathan.m@hcl.com'
          
        }
    }
}
