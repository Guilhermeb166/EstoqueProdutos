# inventario.py
from flask import Blueprint, jsonify
from database import SessionLocal
from models import Produto, ProdutoExcluido

bp = Blueprint("inventario",  __name__, url_prefix="/api/inventario")

@bp.route("", methods=["GET"])
def inventario():
    session = SessionLocal()
    total_produtos = session.query(Produto).count()
    quantidade_total = sum([p.quantidade for p in session.query(Produto).all()])
    valor_total = sum([p.quantidade * p.preco for p in session.query(Produto).all()])

    ultimo_produto_adicionado = session.query(Produto).order_by(Produto.id.desc()).first()
    nome_ultimo_adicionado = ultimo_produto_adicionado.nome if ultimo_produto_adicionado else None

    ultimo_produto_excluido = session.query(ProdutoExcluido).order_by(ProdutoExcluido.data_exclusao.desc()).first()
    nome_ultimo_excluido = ultimo_produto_excluido.nome if ultimo_produto_excluido else None

    session.close()
    return jsonify({
        "total_produtos": total_produtos,
        "quantidade_total": quantidade_total,
        "valor_total": valor_total,
        "ultimo_adicionado": nome_ultimo_adicionado,
        "ultimo_excluido": nome_ultimo_excluido
    })