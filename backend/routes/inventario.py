# inventario.py
from flask import Blueprint, jsonify
from database import SessionLocal
from models import Produto

bp = Blueprint("inventario",  __name__, url_prefix="/api/inventario")

@bp.route("", methods=["GET"])
def inventario():
    session = SessionLocal()
    total_produtos = session.query(Produto).count()
    quantidade_total = sum([p.quantidade for p in session.query(Produto).all()])
    valor_total = sum([p.quantidade * p.preco for p in session.query(Produto).all()])
    session.close()
    return jsonify({
        "total_produtos": total_produtos,
        "quantidade_total": quantidade_total,
        "valor_total": valor_total 
    })