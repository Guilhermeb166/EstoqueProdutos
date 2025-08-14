#  models.py
from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

class Produto(Base):
    __tablename__ = "produtos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable = False)
    descricao = Column(String, default="")
    preco = Column(Float, default=0.0)
    quantidade = Column(Integer, default=0)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "descricao": self.descricao,
            "preco": self.preco,
            "quantidade": self.quantidade
        }
    
class ProdutoExcluido(Base):
    __tablename__ = "produtos_excluidos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    descricao = Column(String, default="")
    preco = Column(Float, default=0.0)
    quantidade = Column(Integer, default=0)
    data_exclusao = Column(DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "descricao": self.descricao,
            "preco": self.preco,
            "quantidade": self.quantidade,
            "data_exclusao": self.data_exclusao.isoformat()
        }