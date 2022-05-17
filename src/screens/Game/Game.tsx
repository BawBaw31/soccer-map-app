import React from 'react'
import { ScrollView } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase/firebase-setup'
import { useEffect, useState } from 'react'

interface GameProps {
    route: any
}

export const Game = (props: GameProps) => {
    const [game, setGame] = useState<any>({})

    useEffect(() => {
        const ac = new AbortController()
        try {
            onValue(ref(db, `games/${props.route.params.id}`), (snapshot) => {
                const data = snapshot.val()
                setGame(data)
            })
        } catch (e) {
            console.log('Error on getting data : ' + e)
        }
        return () => ac.abort()
    }, [])
    return (
        <TitleLayout title={game.name}>
            <ScrollView></ScrollView>
        </TitleLayout>
    )
}
