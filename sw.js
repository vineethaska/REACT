self.addEventListener('push', () => {
    self.registration.sendNotification('test messege', {});
});