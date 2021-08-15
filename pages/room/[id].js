
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { io } from 'socket.io-client';



export default function room() {

    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        async function getvideo() {
            console.log(navigator.mediaDevices);
            const video = await navigator.mediaDevices.getDisplayMedia({ video: true })
                .then((video) => {
                    console.log(video);
                    const videoStream = document.getElementById('video')
                    const pc = new RTCPeerConnection(null);
                    const socket = io();
                    console.log(pc);
                    // socket.emit('video',video);

                    // socket.on('video',video=>{
                    //     console.log(video);
                    // videoStream.srcObject = video;
                    // videoStream.onloadedmetadata = function (e) {
                    //     videoStream.play();
                    // };
                // })

                    return 'ok'

                })

                .catch((err) => {
                    console.log(err);
                })

        }

        getvideo();

    }, [id])


    const rooms = ['1', '2', '3', '1202321', '1283127', 'AjashA8128AbdhKnsaD'];

    if (id) {

        if (rooms.indexOf(id) != -1) {

            id ? console.log("A sala é: " + id) : '';
            console.log(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);




            return <video id='video' style={{width:'auto',height:'600px'}}></video>






        } else {
            useEffect(() => {
                window.location.replace('/');
            })
            return <div></div>

        }


    } else {



        return <div>loading</div>

    }


}