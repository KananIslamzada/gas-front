import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import screenNames from '../values/screenNames';
import colors from '../config/colors';
import Animated, { FadeInDown, SlideInLeft, SlideOutRight, ZoomIn, ZoomOut } from 'react-native-reanimated';

const students = [
    {
        name: "Alice",
        surname: "Anderson",
        school: "School No. 3",
        id: 1,
    },
    {
        name: "Bob",
        surname: "Baker",
        school: "School No. 3",
        id: 2,
    },
    {
        name: "Charlie",
        surname: "Carter",
        school: "School No. 3",
        id: 3,
    },
    {
        name: "David",
        surname: "Davis",
        school: "School No. 3",
        id: 4,
    },
    {
        name: "Emily",
        surname: "Edwards",
        school: "School No. 3",
        id: 5,
    },
    {
        name: "Frank",
        surname: "Foster",
        school: "School No. 3",
        id: 6,
    },
    {
        name: "Grace",
        surname: "Garcia",
        school: "School No. 3",
        id: 7,
    },
    {
        name: "Henry",
        surname: "Harris",
        school: "School No. 3",
        id: 8,
    },
    {
        name: "Isabella",
        surname: "Irwin",
        school: "School No. 3",
        id: 9,
    },
    {
        name: "Jacob",
        surname: "Jones",
        school: "School No. 3",
        id: 10,
    },
    {
        name: "Katie",
        surname: "Kim",
        school: "School No. 3",
        id: 11,
    },
    {
        name: "Liam",
        surname: "Lee",
        school: "School No. 3",
        id: 12,
    },
    {
        name: "Mia",
        surname: "Martinez",
        school: "School No. 3",
        id: 13,
    },
    {
        name: "Nathan",
        surname: "Nguyen",
        school: "School No. 3",
        id: 13,
    },
    {
        name: "Olivia",
        surname: "O'Brien",
        school: "School No. 3",
        id: 14,
    },
    {
        name: "Patrick",
        surname: "Park",
        school: "School No. 3",
        id: 15
    },
    {
        name: "Quinn",
        surname: "Queen",
        school: "School No. 3",
        id: 16
    },
    {
        name: "Rachel",
        surname: "Ross",
        school: "School No. 3",
        id: 17,
    },
    {
        name: "Samuel",
        surname: "Scott",
        school: "School No. 3",
        id: 18,
    },
    {
        name: "Tara",
        surname: "Taylor",
        school: "School No. 3",
        id: 19,
    }
]

const questions = [
    {
        question: "How are you?",
        bgColor: "green",
        students: students.slice(0, 4),
        id: 1
    },
    {
        question: "How old are you?",
        bgColor: "blue",
        students: students.slice(4, 8),
        id: 2
    },
    {
        question: "Where are you from?",
        bgColor: "yellow",
        students: students.slice(12, 16),
        id: 3
    },
    {
        question: "Are you Developer?",
        bgColor: "red",
        students: students.slice(16, 20),
        id: 4
    },
]
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const Questions = ({ navigation }) => {
    const [question, setQuestion] = useState(questions[0]);
    const totalPoint = useRef(0);
    const currentQustionIndex = useRef(0);


    const nextQuestion = useCallback((passed = false) => {
        if (!passed) totalPoint.current += 1;
        if (currentQustionIndex.current === questions.length - 1) return navigation.navigate(screenNames.finish, { total: totalPoint.current })
        setQuestion(questions[currentQustionIndex.current + 1]);
        currentQustionIndex.current += 1;
    }, []);


    const _renderItem = useCallback(({ item: { name, surname }, index }) => {
        return (
            <AnimatedButton
                exiting={ZoomOut.delay(index * 100).duration(100).springify()}
                entering={ZoomIn.delay(index * 150).duration(500).springify()}
                style={styles.select} activeOpacity={0.5} onPress={() => nextQuestion()} >
                <Text style={styles.selectName} >{name} {surname}</Text>
            </AnimatedButton>
        )
    }, [])

    return (
        <View style={styles.container}>
            <Animated.Text
                entering={FadeInDown.duration(700).springify()}
                style={styles.question} >
                {question.question}
            </Animated.Text>

            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={question.students}
                    keyExtractor={item => item.id?.toString()}
                    numColumns={2}
                    bounces={false}
                    scrollEnabled={false}
                    contentContainerStyle={{ gap: 20, alignItems: 'center', justifyContent: "flex-end", padding: 40 }}
                    renderItem={_renderItem}
                />
            </View>

            <View style={styles.skipContainer} >
                <Text onPress={() => nextQuestion(true)} style={styles.skip} >Skip</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange,
        height: "100%",
        justifyContent: "flex-end"
    },
    select: {
        backgroundColor: colors.white,
        width: 150,
        height: 70,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,
        marginHorizontal: 10
    },
    selectName: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "500"
    },
    skip: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "600"
    },
    skipContainer: {
        width: "90%",
        alignItems: "flex-end",
        margin: 20,
        padding: 20
    },
    question: {
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
        fontSize: 25,
        color: colors.white,
        fontWeight: "600"
    }
});

export default Questions;