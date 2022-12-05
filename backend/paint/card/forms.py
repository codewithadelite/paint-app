from django.forms import ModelForm
from card.models import Category, Designer


class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = "__all__"


class DesignerForm(ModelForm):
    class Meta:
        model = Designer
        fields = "__all__"
