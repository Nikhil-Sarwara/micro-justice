import subprocess
import os

def run_backend():
    subprocess.run(["npm", "run", "dev"], check=True, cwd="backend")

def run_frontend():
    subprocess.run(["npm", "run", "dev"], check=True, cwd="frontend")

def run_both():
    backend_process = subprocess.Popen(["npm", "run", "dev"], cwd="backend")
    frontend_process = subprocess.Popen(["npm", "run", "dev"], cwd="frontend")
    backend_process.wait()
    frontend_process.wait()

def change_branch():
    branch = input("Enter branch name: ")
    subprocess.run(["git", "checkout", branch], check=True)

def list_branches():
    subprocess.run(["git", "branch"], check=True)

def git_fetch():
    subprocess.run(["git", "fetch"], check=True)

def pull_from_origin():
    subprocess.run(["git", "pull", "origin"], check=True)

def current_branch():
    subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], check=True)

def current_diff():
    subprocess.run(["git", "diff"], check=True)

def current_modified_files():
    subprocess.run(["git", "status", "--short"], check=True)

def add_modified_files():
    subprocess.run(["git", "add", "."], check=True)

def commit():
    message = input("Enter commit message: ")
    subprocess.run(["git", "commit", "-m", message], check=True)

def push_to_origin():
    subprocess.run(["git", "push", "origin"], check=True)

while True:
    print("\nOptions:")
    print("1. Run backend")
    print("2. Run frontend")
    print("3. Run both")
    print("4. Change branch")
    print("5. List branches")
    print("6. Git fetch")
    print("7. Pull from origin")
    print("8. Current branch")
    print("9. Current diff")
    print("10. Current modified files")
    print("11. Add modified files")
    print("12. Commit")
    print("13. Push to origin")
    print("14. Quit")
    
    option = input("Enter option: ")

    if option == "1":
        run_backend()
    elif option == "2":
        run_frontend()
    elif option == "3":
        run_both()
    elif option == "4":
        change_branch()
    elif option == "5":
        list_branches()
    elif option == "6":
        git_fetch()
    elif option == "7":
        pull_from_origin()
    elif option == "8":
        current_branch()
    elif option == "9":
        current_diff()
    elif option == "10":
        current_modified_files()
    elif option == "11":
        add_modified_files()
    elif option == "12":
        commit()
    elif option == "13":
        push_to_origin()
    elif option == "14":
        break
    else:
        print("Invalid option")

