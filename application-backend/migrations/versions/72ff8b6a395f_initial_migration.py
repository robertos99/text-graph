"""Initial migration

Revision ID: 72ff8b6a395f
Revises: 
Create Date: 2023-05-22 09:41:27.618059

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72ff8b6a395f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('document',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('text', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('document')
    # ### end Alembic commands ###
