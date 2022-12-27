import os

BACKEND_PATH = "/Backend/job_status_project/"
FRONTEND_PATH = "/Frontend/app-portfolio/"
FRONTEND_ENV_PATH = "/Frontend/env/Scripts/"
BACKEND_ENV_PATH = "/Backend/project_env/Scripts/"
FILE = "activate.bat" 

def frontend_env_setup():
    env_path = os.getcwd() + FRONTEND_ENV_PATH + FILE
    os.system(f'start cmd /k "color b & "{env_path}" & cd "{os.getcwd() + FRONTEND_PATH}" & npm start"')
    print(f"{os.getcwd() + FRONTEND_ENV_PATH}")

def backend_env_setup():
    #FIXME: Won't work
    env_path = os.getcwd() + BACKEND_ENV_PATH + FILE

    os.system(f'start cmd /k "color a & "{env_path}" & cd "{os.getcwd() + BACKEND_PATH}""')
    print({os.getcwd() + BACKEND_PATH})
    
if __name__ == "__main__":
    frontend_env_setup()
    # backend_env_setup()