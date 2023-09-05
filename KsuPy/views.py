from django.shortcuts import render
from KsuPy.models import Image,ImageSave, Stih
import requests
import datetime


def take_400_photos():
    response = requests.get('https://api.vk.com/method/photos.get?access_token=vk1.a.S-o4WQ14DHk5LxhmAEngiuhhtAOzBniazftWCDWWm3eUIsRHiWaNW0sIkK8pr-u4jtkzMnx6tYKghrpTVVaMMDhUIzrjIESdjeagPbAbr9sMhUTFowcr2VpZ2BJppwtEHO-KSZLka8-yyUF9VQ5AVt_rVVlMNVR6O5at1wwOKh-MBhVx1AA-20VK8fSTjMtv924yNHeld_7zrIoL3KykFQ&v=5.131&owner_id=447856506&album_id=-15&rev=1&count=400')
    data = response.json()['response']['items']
    return data

def index(request):
    return  render(request, 'index.html')
# Произвести пожилой парс!
def saveimg(request):
    try:
        data = take_400_photos()
    except:
        return render(request, 'error.html')


    # Получаем все записи из базы данных
    imagesave = ImageSave.objects.all()

    # Перебираем все записи
    for image_save in imagesave:
        imageurl = image_save.image

        # Проверяем, есть ли imageurl в новых данных
        existing_photo = next((photo for photo in data if photo['sizes'][-1]['url'] == imageurl), None)

        # Если imageurl не найден, удаляем запись из базы данных
        if not existing_photo:
            image_save.delete()

    # Добавляем новые записи в базу данных
    for photo in data:
        imageurl = photo['sizes'][-1]['url']

        # Проверяем, есть ли уже запись с таким изображением в базе данных
        existingimage = ImageSave.objects.filter(image=imageurl).first()

        if not existingimage:
            timestamp = photo['date']
            dt = datetime.datetime.fromtimestamp(timestamp)
            formatted_date = dt.strftime('%Y-%m-%d %H:%M:%S')
            newimage = ImageSave(image=imageurl, created_at=formatted_date)
            newimage.save()

    # Получаем обновленный список записей из базы данных
    imagesave = ImageSave.objects.order_by('-created_at')

    context = {'imagesave': imagesave}
    return render(request, 'Save.html', context)
def drawing(request):
    image = Image.objects.all()
    context = {'image': image}
    return  render(request, 'Draw.html', context)

def stih(request):
    stih = Stih.objects.filter()
    context = {'stih': stih}
    return  render(request, 'Stih.html', context)
