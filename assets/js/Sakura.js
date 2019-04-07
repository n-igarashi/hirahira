import * as PIXI from 'pixi.js'

export default class Sakura {
  constructor() {
    this.SAKURA_COUNT = 100
    this.canvas = document.getElementById('sakura')
    this.rendererOptions = {
      view: this.canvas,
      transparent: true,
      antialias: true
    }

    this.stage = new PIXI.Container()
    this.renderer = PIXI.autoDetectRenderer(
      this.canvas.width,
      this.canvas.height,
      this.rendererOptions
    )

    this.sakuraImage = []

    this.animationId = null

    this.sakuraArry = [
      require('~/assets/images/sakura1.png'),
      require('~/assets/images/sakura2.png'),
      require('~/assets/images/sakura3.png'),
      require('~/assets/images/sakura4.png'),
      require('~/assets/images/sakura5.png')
    ]
  }

  run() {
    this.init()
  }

  fall() {
    for (let i = 0; i < this.sakuraImage.length; i++) {
      this.sakuraImage[i].rotationX +=
        this.sakuraImage[i].rotationVx + Math.random() * 5
      this.sakuraImage[i].rotationY +=
        this.sakuraImage[i].rotationVy + Math.random() * 5
      this.sakuraImage[i].rotationZ +=
        this.sakuraImage[i].rotationVz + Math.random() * 2
      const vx =
        this.sakuraImage[i].vx +
        0.1 *
          Math.abs(Math.sin((this.sakuraImage[i].rotationZ * Math.PI) / 180))
      const vy =
        this.sakuraImage[i].vy +
        0.2 *
          Math.abs(Math.cos((this.sakuraImage[i].rotationX * Math.PI) / 180))
      const vz =
        this.sakuraImage[i].vz +
        0.1 *
          Math.abs(Math.sin((this.sakuraImage[i].rotationY * Math.PI) / 180))

      this.sakuraImage[i].x -= vx
      this.sakuraImage[i].y += vy
      this.sakuraImage[i].z += vz

      if (this.sakuraImage[i].y > 900) {
        this.sakuraImage[i].y = this.sakuraImage[i].yStart
        this.sakuraImage[i].x = this.sakuraImage[i].xStart
      }
      if (this.sakuraImage[i].z < 0) {
        this.sakuraImage[i].z = 500
      }
      this.sakuraImage[i].rotation =
        (this.sakuraImage[i].rotationZ * Math.PI) / 180
      this.sakuraImage[i].scale.y = Math.sin(
        (this.sakuraImage[i].rotationX * Math.PI) / 180
      )
    }
  }

  init() {
    for (let i = 0; i < this.SAKURA_COUNT; ++i) {
      const sakura = new PIXI.Sprite(
        PIXI.Texture.fromImage(this.sakuraArry[Math.floor(Math.random() * 4)])
      )
      sakura.scale.x = sakura.scale.y = Math.random() * 0.4 + 0.4
      console.log(sakura.scale.x, sakura.scale.y)
      sakura.rotationX = Math.random() * 360
      sakura.rotationY = Math.random() * 360
      sakura.rotationZ = Math.random() * 360
      sakura.x = Math.random() * 2000 + 1300
      sakura.xStart = sakura.x
      sakura.y = Math.random() * 1500 - 1500
      sakura.yStart = sakura.y
      sakura.z = Math.random() * 500

      sakura.vx = 1.3 + 0.2 * Math.random()
      sakura.vy = 1.5 + 0.5 * Math.random()
      sakura.vz = 1.3 + 0.2 * Math.random()

      sakura.rotationVx = 7 - 10 * Math.random()
      sakura.rotationVy = 7 - 10 * Math.random()
      sakura.rotationVz = 7 - 10 * Math.random()

      sakura.anchor.x = sakura.anchor.y = 0.5

      this.sakuraImage.push(sakura)
      this.stage.addChild(this.sakuraImage[i])
    }

    const update = e => {
      this.animationId = requestAnimationFrame(update)
      this.fall()
      this.renderer.render(this.stage)
    }
    update()
  }
}
