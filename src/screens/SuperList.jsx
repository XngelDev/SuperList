import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Appbar, Button, Dialog, Modal, Portal, TextInput, useTheme } from 'react-native-paper'
import DisplayList from '../components/templates/DisplayList'
import ListItem from '../components/ui/ListItem'
import BodyContainer from '../components/templates/BodyContainer'
import EmptyShopLists from '../components/ui/EmptyShopLists'
import { useNavigation } from '@react-navigation/native'

import { createSuperList, trashSuperList } from '../redux/super_list/reducer'

import { useDispatch, useSelector } from 'react-redux'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useTranslation } from 'react-i18next'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import EmptyCart from '../assets/icons/ic_empty_cart.png'

const SuperList = () => {

    const theme = useTheme()
    const nav = useNavigation()
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const state = useSelector(state => state.superList)
    const insertSuperList = (payload) => dispatch(createSuperList(payload))
    const removeSuperList = (payload) => dispatch(trashSuperList(payload))

    const [name, setName] = useState("")
    const [logPressDialog, showLongPressDialog] = useState(null)
    const [addDialog, showAddDialog] = useState(false)

    const bottomSheet = useRef()

    const handleDialogAction = (action) => {
        if (logPressDialog == null) {
            return
        }
        const actions = {
            delete: () => removeSuperList(logPressDialog),
            edit: () => handleOnItemPress(logPressDialog)
        }
        actions[action]()
        showLongPressDialog(null)
    }

    const handleAddAction = () => {
        showAddDialog(true)
    }

    const handleChangeText = (text) => {
        setName(text)
    }

    const handleActionSave = () => {
        Keyboard.dismiss()
        if (name == "") {
            return
        }
        insertSuperList(name)
        setName("")
        showAddDialog(false)
    }

    const handleOnItemPress = (item) => {
        nav.navigate("super_list_content", { data: item })
    }

    const handleOnItemLongPress = (item) => {
        showLongPressDialog(item)
    }

    return (
        <GestureHandlerRootView>
            <Portal>
                <Dialog visible={logPressDialog !== null} onDismiss={() => showLongPressDialog(null)}>
                    <Dialog.Title>{logPressDialog?.title}</Dialog.Title>
                    <Dialog.Content >
                        <Text variant="bodyMedium">{t("text_delete_trash")}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => handleDialogAction("delete")}>{t("action.delete")}</Button>
                        <Button onPress={() => handleDialogAction("edit")}>{t("action.edit")}</Button>
                        <Button onPress={() => showLongPressDialog(null)}>{t("action.close")}</Button>
                    </Dialog.Actions>
                </Dialog>
                <Modal
                    visible={addDialog}
                    style={{ alignItems: "center" }}
                    contentContainerStyle={{ backgroundColor: theme.colors.background, padding: 16, borderRadius: 23 }} >
                    <View style={{ width: 320, }} >
                        <Text>Add</Text>
                        <TextInput value={name} onChangeText={handleChangeText} label={t("text_name")} style={{ marginVertical: 16 }} ></TextInput>
                        <Button onPress={handleActionSave} mode='contained-tonal' >{t("action.save")}</Button>
                    </View>
                </Modal>
            </Portal>
            <Appbar.Header >
                <Appbar.Content titleStyle={{ color: theme.colors.secondary }} title="Super List" />
            </Appbar.Header>
            <BodyContainer hasNavigation="bottom" >
                <DisplayList
                    data={state.data}
                    renderItem={ListItem}
                    emptyComponent={<EmptyShopLists image={EmptyCart} title="text_empty_cart" subtitle="text_empty_cart_subtitle" />}
                    onAddAction={handleAddAction}
                    onItemPress={handleOnItemPress}
                    onItemLongPress={handleOnItemLongPress}
                />
            </BodyContainer>
        </GestureHandlerRootView>
    )
}

export default SuperList

const styles = StyleSheet.create({})