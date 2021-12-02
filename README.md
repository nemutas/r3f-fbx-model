# About
**React Three Fibar**を使用して、fbxファイルのモデルとアニメーションを読み込みました。

https://nemutas.github.io/r3f-fbx-model/
![スクリーンショット 2021-12-02 200122](https://user-images.githubusercontent.com/46724121/144410048-a74baf42-e6b5-44f4-af40-2510e83a94df.png)

# 3D Model
3Dモデルは、[Mixamo](https://www.mixamo.com/)からお借りしました。

* [YBot](https://www.mixamo.com/#/?page=1&query=Y&type=Character)
* [Bellydancing](https://www.mixamo.com/#/?page=1&query=belly&type=Motion%2CMotionPack)
* [Samba Dancing](https://www.mixamo.com/#/?page=1&query=samba&type=Motion%2CMotionPack)
* [Goofy Running](https://www.mixamo.com/#/?page=1&query=goofy&type=Motion%2CMotionPack)

# Links
### Texture
Materialには、Matcapテクスチャーを使用しています。
* [MeshMatcapMaterial](https://threejs.org/docs/index.html?q=MeshMatcapMaterial#api/en/materials/MeshMatcapMaterial)
* [useMatcapTexture](https://docs.pmnd.rs/drei/prototyping/use-matcap-texture)
* [MatCaps](https://github.com/nidorx/matcaps)

### FBX Loader
モデルloaderには、[@react-three/drei](https://docs.pmnd.rs/drei/introduction)の**useFBX**フックを使用しています。
* [useFBX](https://docs.pmnd.rs/drei/loaders/use-fbx)
* [Loading FBX models using useFBX](https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models#loading-fbx-models-using-use-fbx)

### Controller
コントローラーには、**LEVA**を使用しています。
* [LEVA](https://github.com/pmndrs/leva)
