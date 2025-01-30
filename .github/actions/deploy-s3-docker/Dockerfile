FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

RUN pip install legacy-cgi

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]
