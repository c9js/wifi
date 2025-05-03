:: z "Беспроводная сеть" "Беспроводная сеть 3"

:: Отключаем дублирование команд в консоли
:: @echo off

:: Очищаем консоль
cls

netsh interface set interface name=%2 admin=disabled
netsh interface set interface name=%1 admin=disabled

netsh interface set interface name=%2 admin=enabled
netsh wlan set hostednetwork mode=allow ssid="12345678901234567890123456789012" key=xpAQScbqVeXYG1R2SpRYno
netsh wlan start hostednetwork

:: netsh interface set interface name=%1 admin=enabled
:: netsh wlan set hostednetwork mode=allow ssid=001 key=xpAQScbqVeXYG1R2SpRYno
:: netsh wlan start hostednetwork