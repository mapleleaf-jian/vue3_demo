import {reactive, onMounted, onUnmounted} from 'vue'

export default function() {
    const point = reactive({
        x: 0,
        y: 0
    })

    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onUnmounted(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}