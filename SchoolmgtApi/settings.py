
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

AUTH_USER_MODEL = 'common.BaseUser' 

SECRET_KEY = os.getenv('django_secret_key')

DEBUG = os.getenv('debug', False)

ALLOWED_HOSTS = os.getenv('ALLOWED_HOST', ".localhost").split(',')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'common',
    'students',
    'teacher',
    'management',
    'salamYusuf',
    
    'rest_framework'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'SchoolmgtApi.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'SchoolmgtApi.wsgi.application'



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    },
    'tenant_1': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'tenant_1.sqlite3',
    },
    'tenant_2': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'tenant_2.sqlite3',
    },
    'tenant_3': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'tenant_3.sqlite3',
    },
    'tenant_4': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'tenant_4.sqlite3',
    },
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'


SECIAL_KEY = os.getenv('sy_secret_key')

DATABASE_ROUTERS = ['SchoolmgtApi.routers.CustomRouter']