import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

export function loadGLTFModel(
    
  scence,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
    const {receiveShadow, castShadow} = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()
        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = "dog"
                obj.position.y = -2
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scence.add(obj)

                obj.traverse(function (child){
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}
