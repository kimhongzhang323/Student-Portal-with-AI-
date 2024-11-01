from django.db import models

# Create your models here.
class ChatMessage(models.Model):
    prompt = models.TextField()
    bot_response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.prompt}, Bot: {self.bot_response}"