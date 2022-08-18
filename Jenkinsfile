pipeline{

// Consider any agent
// agent any

// Consider only agent
agent {
  label 'agent2'
} 

// Exclude an agent
// agent {
//   label '!agent1'
// } 


environment{
  PROJECT_NAME = "Volt MX Document External Server"
}

options{
     buildDiscarder(logRotator(numToKeepStr: "10"))    
  }

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
          //----- 
          echo "fetch branches from remote.."
          sh "git fetch origin rel/HPHX:rel/HPHX"
          
          echo "checkout to release branch"
          sh "git checkout release"
          sh "git fetch origin release"
          sh "git pull origin release"
          sh "git merge rel/HPHX"
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
          // sh('git commit --allow-empty -am "Release Build"')    //empty commits
          sh('git commit -am "Release Build"')
          sh('git pull origin release')
          sh('git push origin release')
          //----- 
          
                    // ----------------------------------------------------//
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
          
          // -----
          sh "git status"
          sh "git checkout -b feature/HPHX"
          sh "git push volt-mx-docs feature/HPHX"
          sh "gh pr create -t 'Merging 9.2.47 Release Notes changes' -b 'HPHX-19082: Merging 9.2.47 Release Notes changes'"
          sh "gh pr status"
          sh "gh pr merge --merge"
          sh "git checkout master"
          sh "git status"
          sh "git branch -D feature/HPHX"
          // -----
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
             println("${author_email_id}")
             sh "echo 'Last 5 commit/change history'"
             //def n1 = sh script: "git show -s --pretty=format:'Author_Name: %an, Author_Email_Id: %ae, Committed_Time: %ar, Changes: %s, Change_Description: %b, Commit_Hash_Id: %h .' ${GIT_COMMIT} -5 ", returnStdout: true 
             def n1 = sh script: "git show -s --pretty=format:'Author_Name: %an, Author_Email_Id: %ae, Committed_Time: %ar, Changes: %s, Commit_Hash_Id: %h.' ${GIT_COMMIT} -5 ", returnStdout: true 
             println("${n1}")
             println("Datatype of n1 is :")
             println(n1.getClass().getName())
             def (h1,h2,h3,h4,h5) = "${n1}".tokenize('\n')
             println("Commit History 1: ${h1}")            
             println("Commit History 2: ${h2}")             
             println("Commit History 3: ${h3}")             
             println("Commit History 4: ${h4}")             
             println("Commit History 5: ${h5}")
            emailext attachLog: true, compressLog:true, body:"<p>***********************************************************************************</p><h2>${env.PROJECT_NAME} - Build Status: </h2><h3><u>Present Build Updates:</u></h3><table><tr><th>Build Number: </th><td><code>${env.BUILD_NUMBER}</code></td></tr><tr><th>Build Status: </th><td><code>${currentBuild.currentResult}</code></td></tr><tr><th>Build Duration: </th><td><code>${currentBuild.durationString}</code></td></tr></table><h3><u>Last 5 ChangeSets/History:</u></h3><table><tr><th>Commit History-1:</th><td><code>${h1}</code></td></tr><tr><th>Commit History-2:</th><td><code>${h2}</code></td></tr><tr><th>Commit History-3:</th><td><code>${h3}</code></td></tr><tr><th>Commit History-4:</th><td><code>${h4}</code></td></tr><tr><th>Commit History-5:</th><td><code>${h5}</code></td></tr></table><p>Please check the attached build logs and output to view the results in detail.</p><p>Verify your changes published externally from this base URL: <br>https://opensource.hcltechsw.com/volt-mx-docs/ .</p><p>***********************************************************************************</p>", replyTo: 'vishwanathan.m@hcl.com', subject: "${env.PROJECT_NAME} - Build # ${env.BUILD_NUMBER} - ${currentBuild.currentResult}!", to: 'michael.stewart@hcl.com, david.sayer@hcl.com, amita.g@hcl.com, kumari.h@hcl.com, sanjay-c@hcl.com, vishwanathan.m@hcl.com' 
           }
        }
    }
}
