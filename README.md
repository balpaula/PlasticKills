# PlasticKills game
Ironhack Project Module 1

## Descripción
El pez tiene que evitar chocar con los diferentes objetos de plástico (botellas, latas, etc) e intentar recolectar el máximo número de estrellas (puntos).
Puede moverse de izquierda a derecha. Si choca con un objeto de plástico, el pez muere y termina la partida.

## MVP - Tecnología (DOM - CANVAS)
Tecnología usada: canvas
MVP del proyecto:
* El pez puede moverse de derecha a izquierda
* Aparecen objetos desde abajo hacia arriba
* Colisiones con los objetos de plástico (game over)
* States: start, game, game over

## Backlog
* Para móviles/tablets (touch events)
* Mover el fondo (background image) para producir efecto de movimiento del pez
* Aparición de estrella desde abajo hacia arriba
* Colisiones con estrellas para conseguir puntos
* Puntuación
* Sprite sheet / gif del pez
* Vidas del pez (antes de game over)
* Sonidos para las colisiones
* Música de fondo
* Levels: aumentar la velocidad de los objetos + canviar el color del fondo
* Poder seleccionar diferentes peces en el state Start
* Animación del pez cuando el pez colisiona con una estrella
* Añadir un dato curioso sobre el plástico randomly en el state de Game Over

## Estructuras de datos
Clases:
* Game: game.js
* Fish: fish.js
* Plastic: plastic.js
* Star: star.js

Main:
* buildSplash()
* destroySplash()
* buildGame()
* destroyGame()
* buildGameOver()
* destroyGameOver()

Métodos Game:
* _drawBoard()
* _drawFish()
* _drawPlastic()
* _drawStar()
* start()
* assignControlToTouchEvents()
* _generateObject() → Both for plastic and stars
* _update() → When eaten a star
* stop()

Métodos Fish:
* start()
* move()
* goLeft()
* goRight()
* collidesWith()
* stop()
* hasEatenStar() → Para el backlog de añadir animación

Métodos Plastic:
* move()

Métodos Star:
* move()

(Creo que podria unir Plastic y Star en una sola clase Objects (?) )

## Tasks

## Trello

## Git

## Instrucciones del juego
