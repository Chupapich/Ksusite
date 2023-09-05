from datetime import datetime

from django.db import models
# Нужно доработать модель!
# Create your models here.
class Stih(models.Model):
    title = models.CharField('Название', max_length=255)
    emotionalChoices = [
        ('Дипрессивные', 'Дипрессивные'),
        ('Любовные', 'Любовные'),
        ('Счастливые', 'Счастливые'),
        ('Пустые', 'Пустые')
    ]
    emotional = models.CharField('Вид', max_length=255, choices=emotionalChoices)
    content = models.TextField('Стих', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Стих'
        verbose_name_plural = 'Стихи'

class Image(models.Model):
    image = models.ImageField('Рисунок', upload_to='static/img/base')
    title = models.CharField('название', max_length=255)
    created_at = models.DateTimeField('Дата создания', default=datetime.now)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = 'Рисунок'
        verbose_name_plural = 'Рисунки'

class ImageSave(models.Model):
    image = models.CharField('Путь до картинки', max_length=255)
    created_at = models.DateTimeField('Дата создания', default=datetime.now, blank=True)

    def __str__(self):
        return self.image.title()
    class Meta:
        verbose_name = 'Сохраненная картинка'
        verbose_name_plural = 'Сохраненки'
