from flask import Blueprint, request, jsonify, abort
from database import SessionLocal
from models import Produto, ProdutoExcluido
from datetime import datetime

bp = Blueprint("produtos", __name__, url_prefix="/api/produtos")

@bp.route("", methods=["GET"])
def listar():
    session = SessionLocal()
    produtos = session.query(Produto).all()
    session.close()
    return jsonify([p.to_dict() for p in produtos])

@bp.route("/<int:id>", methods=["GET"])
def buscar (id):
    session = SessionLocal()
    p = session.query(Produto).get(id)
    session.close()
    if not p:
        abort(404)
    return jsonify(p.to_dict())

@bp.route("", methods=["POST"])
def criar():
    data = request.get_json()
    session = SessionLocal()
    p = Produto(
        nome=data.get("nome"),
        descricao=data.get("descricao",""),
        preco=float(data.get("preco",0)),
        quantidade=int(data.get("quantidade",0))
    )
    session.add(p)
    session.commit()
    session.refresh(p)
    session.close()
    return jsonify(p.to_dict()), 201

@bp.route("/<int:id>", methods=["PUT"])
def atualizar(id):
    data = request.get_json()
    session = SessionLocal()
    p = session.query(Produto).get(id)
    if not p:
        session.close()
        abort(404)
    p.nome = data.get("nome", p.nome)
    p.descricao = data.get("descricao", p.descricao)
    p.preco = float (data.get("preco", p.preco))
    p.quantidade = int(data.get("quantidade", p.quantidade))
    session.commit()
    session.refresh(p)
    session.close()
    return jsonify(p.to_dict())

@bp.route("/<int:id>", methods=["DELETE"])
def remover(id):
    session= SessionLocal()
    p = session.query(Produto).get(id)
    if not p:
        session.close()
        abort(404)
    
    # Salva o produto na tabela ProdutoExcluido antes de deletar
    excluido = ProdutoExcluido(
        nome=p.nome,
        descricao=p.descricao,
        preco=p.preco,
        quantidade=p.quantidade,
        data_exclusao=datetime.utcnow()
    )
    session.add(excluido)

    session.delete(p)
    session.commit()
    session.close()
    return "", 204
