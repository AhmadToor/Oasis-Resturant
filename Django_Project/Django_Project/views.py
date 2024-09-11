from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import redirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout

def custom404(request, exception):
    return render(request, 'index.html')


name = ''
def index(request):
    if not request.user.is_authenticated:
        return redirect(reverse('loginuser'))
    return render(request, 'index.html')

def loginuser(request):
    username = request.GET.get('username')
    password = request.GET.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect(reverse('index'))
    
    
    return render(request, 'login.html')
def logoutuser(request):
    logout(request)
    return render(request, 'login.html')

@csrf_protect
def submit(request):
    global name 
    value = request.GET.get('name')
    name = value
    email = request.GET.get('email')
    message = request.GET.get('message')
    
    
    
    return render(request, 'index.html')
    
    

    
def FormApi(request):
    global name
    if name:
        text = f"Thanks  for your message {name}! Our team will promptly review and respond to your inquiry. We value your time and appreciate your consideration."
        return JsonResponse({'text': text})
    else:
        return JsonResponse({'text': 'Please Enter a Name!'})