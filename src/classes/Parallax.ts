export default class Parallax {
    private scene: HTMLElement
    private speed: number = 1

    private position = {
        x: 0,
        y: 0,
    }

    private coordinate = {
        x: 0,
        y: 0,
    }

    public constructor(scene: HTMLElement) {
        this.scene = scene
        this.scene.addEventListener('mousemove', this.parallax.bind(this))
    }

    private parallax(event: MouseEvent): void {
        const sceneWidth = this.scene.offsetWidth
        const sceneHeight = this.scene.offsetHeight

        this.coordinate.x = ((event.pageX - sceneWidth / 2) / sceneWidth) * 100
        this.coordinate.y =
            ((event.pageY - sceneHeight / 2) / sceneHeight) * 100

        const distX: number = this.coordinate.x - this.position.x
        const distY: number = this.coordinate.y - this.position.y

        this.position.x += distX * this.speed
        this.position.y += distY * this.speed

        this.scene.querySelectorAll('[data-speed]').forEach((item) => {
            const it = item as HTMLElement
            const speed: number = parseInt(
                it.getAttribute('data-speed') as string
            )

            it.style.transform = `translate(${this.position.x / speed}%, ${
                this.position.y / speed
            }%)`
        })
    }
}
