import os
import subprocess
import sys
import shutil
import time

def info(msg): print(f"\033[94m[INFO]\033[0m {msg}")
def success(msg): print(f"\033[92m[SUCCESS]\033[0m {msg}")
def error(msg): print(f"\033[91m[ERROR]\033[0m {msg}")

def check(command, install_url):
    if not shutil.which(command):
        error(f"{command} is not installed.")
        print(f"Please install it: {install_url}")
        sys.exit(1)
    else:
        success(f"{command} is installed.")

def setup_env():
    backend_env = "./backend/.env"
    if not os.path.exists(backend_env):
        info("Creating .env in backend...")
        with open(backend_env, "w") as f:
            f.write(
                'DATABASE_URL="postgresql://postgres:password@localhost:5432/microjustice"\n'
                'JWT_SECRET="mysecret"\n'
                'PORT=4000\n'
            )
        success(".env created.")
    else:
        success(".env already exists.")

def run(cmd, cwd=None):
    try:
        subprocess.run(cmd, shell=True, check=True, cwd=cwd)
    except subprocess.CalledProcessError:
        error(f"Failed: {cmd}")
        sys.exit(1)

def setup_backend():
    info("Installing backend dependencies...")
    run("npm install", cwd="backend")
    run("npx prisma generate", cwd="backend")
    run("npx prisma migrate deploy", cwd="backend")
    run("npm run dev &", cwd="backend")
    success("Backend running.")

def setup_frontend():
    info("Installing frontend dependencies...")
    run("npm install", cwd="frontend")
    run("npm start &", cwd="frontend")
    success("Frontend running.")

def test_auth_apis():
    time.sleep(5)
    info("Testing Auth APIs...")

    register = """curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@demo.com","password":"demo123"}'"""

    login = """curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@demo.com","password":"demo123"}'"""

    print("\n🔹 Register Test:")
    os.system(register)
    print("\n🔹 Login Test:")
    os.system(login)

if __name__ == "__main__":
    check("psql", "https://www.postgresql.org/download/")
    check("node", "https://nodejs.org/")
    check("npm", "https://nodejs.org/")

    setup_env()
    setup_backend()
    setup_frontend()
    test_auth_apis()
