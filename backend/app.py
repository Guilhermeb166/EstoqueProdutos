# app.py
from flask import Flask
from flask_cors import CORS
from database import engine, Base
from routes.produtos import bp as produtos_bp
from routes.inventario import bp as inventario_bp



def create_app():
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    Base.metadata.create_all(bind=engine) # cria o DB se não existe
    app.register_blueprint(produtos_bp)
    app.register_blueprint(inventario_bp)
    return app

app=create_app()

if __name__ == "__main__":
    app.run(debug=True) # dev server
