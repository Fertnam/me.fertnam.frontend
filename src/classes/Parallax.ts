export default class Parallax {
    public readonly scene: HTMLElement
    public readonly parallaxItems: HTMLElement[]

    public readonly speed: number

    public readonly pointer = {
        x: 0,
        y: 0,
    }

    public constructor(scene: HTMLElement, speed: number = 0.5) {
        this.scene = scene
        this.speed = speed

        this.parallaxItems = [
            ...this.scene.querySelectorAll('[data-parallax]'),
        ] as HTMLElement[]

        this.scene.addEventListener('mousemove', this.onMouseMove.bind(this))
    }

    public destroy(): void {
        this.scene.removeEventListener('mousemove', this.onMouseMove.bind(this))
    }

    private onMouseMove(event: MouseEvent): void {
        const sceneWidth = this.scene.offsetWidth
        const sceneHeight = this.scene.offsetHeight

        const distX =
            ((event.pageX - sceneWidth / 2) / sceneWidth) * 100 - this.pointer.x

        const distY =
            ((event.pageY - sceneHeight / 2) / sceneHeight) * 100 -
            this.pointer.y

        this.pointer.x += distX * this.speed
        this.pointer.y += distY * this.speed

        this.parallaxItems.forEach((item) => {
            const offsetCoefficient: number = parseInt(
                item.getAttribute('data-parallax') as string
            )

            item.style.transform = `translate(${
                this.pointer.x / offsetCoefficient
            }%, ${this.pointer.y / offsetCoefficient}%)`
        })
    }
}
