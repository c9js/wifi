:: Запуск скрипта:
:: x "имя Wi-Fi устройства" "перезагружать Wi-Fi устройство через N сек."
:: Пример:
:: x "Беспроводная сеть" 10

:: Отключаем дублирование команд в консоли
@echo off

:: Очищаем консоль
cls

:: Перезагружать Wi-Fi устройство через N сек.
SET reload=%2
:: По умолчанию перезагрузка через 10 сек.
IF -%2==- SET reload=10

:: Создаем счетчик
SET i=%reload%

:: Создаем бесконечный цикл
:loop

:: Перезагружаем Wi-Fi устройство
IF -%i%==-%reload% (
:: Обнуляем счетчик
    SET i=0
    
:: Выводим сообщение на экран
    echo Reloading...
    
:: Выключаем Wi-Fi устройство
    netsh interface set interface name=%1 admin=disabled >nul
    
:: Включаем Wi-Fi устройство
    netsh interface set interface name=%1 admin=enabled >nul
    
:: Выводим сообщение на экран
    echo Device reload!
)

:: Отключаемся от активного беспроводного соединения
netsh wlan disconnect >nul

:: Сканируем Wi-Fi сеть и сохраняем в файл
netsh wlan show networks mode=ssid > "scan.txt"

:: Выводим сообщение на экран
echo Scan completed!

:: Обновляем счетчик
SET /A i=%i+1

:: Добавляем задержку в 1 сек.
timeout /t 1 >nul

:: Переходим в начало бесконечного цикла
goto loop
