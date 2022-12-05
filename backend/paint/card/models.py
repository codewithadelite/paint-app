from djongo import models
from django.contrib.auth.models import AbstractUser
from django.forms import ModelForm


class Category(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Designer(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = "__all__"


class DesignerForm(ModelForm):
    class Meta:
        model = Designer
        fields = "__all__"


class Card(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="images/")
    price = models.IntegerField()
    category = models.EmbeddedField(
        model_container=Category, model_form_class=CategoryForm
    )
    designer = models.EmbeddedField(
        model_container=Designer, model_form_class=DesignerForm
    )

    def __str__(self):
        return self.name


class User(AbstractUser):
    pass
