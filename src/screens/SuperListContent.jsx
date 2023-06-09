import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BodyContainer from '../components/templates/BodyContainer'
import { Appbar, Avatar, Button, Divider, Modal, Portal, Text, TextInput, TouchableRipple, useTheme } from 'react-native-paper'

import DisplayList from '../components/templates/DisplayList'
import EmptyShopLists from '../components/ui/EmptyShopLists'
import ListItem from '../components/ui/ListItem'

import EmptyImage from '../assets/icons/ic_empty_list.png'
import { useTranslation } from 'react-i18next'

const SuperListContent = ({ navigation, route }) => {

    const theme = useTheme()
    const { t } = useTranslation()

    const { data } = route.params

    const [showAddModal, setShowAddModal] = React.useState(false)
    const productInitial = {
        name: "",
        category: "",
        quantity: 0,
        price: 0.0,
        unit: ""
    }
    const [product, setProduct] = React.useState(productInitial)

    const handleAddAction = () => {
        setShowAddModal(true)
    }

    const handleOnItemPress = () => {

    }

    const handleTextChange = (event) => {
        const text = event.text
        const key = event.key
        setProduct({
            ...product,
            [key]: text
        })

    }

    const handleChangeQty = (action) => {

        if (action == "add") {
            setProduct({
                ...product,
                quantity: product.quantity + 1
            })
        }

        if (action == "minus") {
            if (product.quantity > 0) {
                setProduct({
                    ...product,
                    quantity: product.quantity - 1
                })
            }
        }

    }

    const handleAdd = () => {
        setProduct(productInitial)
        setShowAddModal(false)
        console.log(product)
    }

    return (
        <View>
            <Appbar.Header >
                <Appbar.Action icon={"chevron-left"} onPress={() => navigation.goBack()} />
                <Appbar.Content titleStyle={{ color: theme.colors.secondary, }} title={data.title} />
                <Appbar.Action icon="filter" />
            </Appbar.Header>
            <Portal>
                <Modal
                    onDismiss={()=>setShowAddModal(false)}
                    style={{ alignItems: "center" }}
                    visible={showAddModal}
                    contentContainerStyle={{ backgroundColor: theme.colors.background, padding: 16, borderRadius: 23 }} >
                    <View style={{ width: 320, paddingHorizontal: 16 }} >
                        <Text variant="titleMedium" >{t("text_title_add_product")}</Text>
                        <Divider style={{ marginVertical: 6, backgroundColor: "transparent" }} />
                        <TextInput onChangeText={(text) => handleTextChange({ key: "name", text: text })} mode='outlined' numberOfLines={1} label={t("prompt_product_name")} />
                        <Divider style={{ marginVertical: 6, backgroundColor: "transparent" }} />
                        <TextInput onChangeText={(text) => handleTextChange({ key: "category", text: text })} keyboardType='default' label={t("prompt_product_category")} mode='outlined' />
                        <Divider style={{ marginVertical: 6, backgroundColor: "transparent" }} />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            <TextInput value={`${product.quantity}`} onChangeText={(text) => handleTextChange({ key: "quantity", text: text })} onChange={handleTextChange} label={t("prompt_product_qty")} keyboardType='decimal-pad' style={{ flexBasis: "48%" }} mode='outlined' />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexBasis: "40%" }} >
                                <TouchableOpacity onPress={() => handleChangeQty("minus")}>
                                    <Avatar.Icon size={48} icon={"minus"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleChangeQty("add")}>
                                    <Avatar.Icon size={48} icon={"plus"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Divider style={{ marginVertical: 6, backgroundColor: "transparent" }} />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            <TextInput onChangeText={(text) => handleTextChange({ key: "price", text: text })} label={t("prompt_product_price")} keyboardType='decimal-pad' style={{ flexBasis: "48%" }} mode='outlined' />
                            <TextInput onChangeText={(text) => handleTextChange({ key: "unit", text: text })} label={t("prompt_product_unit")} style={{ flexBasis: "48%" }} mode='outlined' />
                        </View>
                        <Divider style={{ marginVertical: 16, backgroundColor: "transparent" }} />
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            <Button mode='outlined' style={{ flexBasis: "48%" }} >{t("action.delete")}</Button>
                            <Button mode='contained' style={{ flexBasis: "48%" }} onPress={handleAdd} >{t("action.add")}</Button>
                        </View>
                    </View>
                </Modal>
            </Portal>
            <BodyContainer hasNavigation="bottom" >
                <DisplayList
                    data={[]}
                    renderItem={ListItem}
                    emptyComponent={<EmptyShopLists image={EmptyImage} title="text_empty_list" subtitle="text_empty_list_subtitle" />}
                    onAddAction={handleAddAction}
                    onItemPress={handleOnItemPress}
                />
            </BodyContainer>
        </View>
    )
}

export default SuperListContent

const styles = StyleSheet.create({})