import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import useEffectOnce from './useEffectOnce';

const useCamera = (userOptions?: MediaStreamConstraints) => {
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [track, setTrack] = useState<MediaStreamTrack | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const options: MediaStreamConstraints = useMemo(() => ({ audio: true, video: true }), []);

    useEffectOnce(() => {
        navigator.mediaDevices
            .getUserMedia({ ...userOptions, ...options })
            .then((mediaStream) => {
                setTrack(mediaStream.getTracks().shift() ?? null);
                setStream(mediaStream);
            })
            .catch((err) => {
                // TODO: UserMedia를 가져오지 못했을 시 에러 처리 필요
                alert(err);
                throw err;
            });
    });

    const captureImage = useCallback(() => {
        const { current } = videoRef;

        if (!current) throw new Error('Video Element not Found');

        const canvas = document.createElement('canvas');

        canvas.width = current.videoWidth;
        canvas.height = current.videoHeight;
        canvas.getContext('2d')?.drawImage(current, 0, 0);

        return canvas.toDataURL('image/jpeg');
    }, []);

    const CameraView = useCallback<React.FC>(() => {
        useEffect(() => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        }, [stream]);

        return <video ref={videoRef} autoPlay muted />;
    }, [stream]);

    return { stream, track, captureImage, CameraView };
};

export default useCamera;
