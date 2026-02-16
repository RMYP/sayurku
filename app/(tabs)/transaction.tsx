import { Input } from "@/components/ui/input";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView className="flex-1 bg-gray-50">
            {/* 1. Bagian Atas: Input / Search Bar */}
            <View className="px-4 pt-14 pb-4 bg-green-600">
                <View className="relative">
                    <Input
                        placeholder="Cari sayur segar..."
                        className="pl-10 bg-white border-0 rounded-full h-12"
                    />
                    <View className="absolute left-3 top-3"></View>
                </View>
            </View>

            {/* 2. Hero Section (Banner) */}
            <View className="p-4">
                <View className="bg-orange-100 rounded-3xl h-40 flex-row items-center px-6 overflow-hidden">
                    <View className="flex-1">
                        <Text className="text-orange-800 text-xl font-bold">
                            Promo Masak!
                        </Text>
                        <Text className="text-orange-700">
                            Diskon hingga 30% untuk bumbu dapur.
                        </Text>
                    </View>
                    {/* Kamu bisa ganti dengan Image asli */}
                    <View className="w-24 h-24 bg-orange-300 rounded-full opacity-50" />
                </View>
            </View>

            {/* 3. Kategori Section */}
            <View className="px-4 mb-6">
                <Text className="text-lg font-bold mb-3">Kategori</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="flex-row"
                >
                    {["Semua", "Daun", "Buah", "Umbi", "Bumbu"].map(
                        (cat, i) => (
                            <TouchableOpacity
                                key={i}
                                className={`mr-3 px-6 py-2 rounded-full ${i === 0 ? "bg-green-600" : "bg-white border border-gray-200"}`}
                            >
                                <Text
                                    className={
                                        i === 0 ? "text-white" : "text-gray-600"
                                    }
                                >
                                    {cat}
                                </Text>
                            </TouchableOpacity>
                        ),
                    )}
                </ScrollView>
            </View>

            {/* 4. Daftar Produk (Grid 2 Kolom) */}
            <View className="px-4 pb-10">
                <Text className="text-lg font-bold mb-4">Produk Segar</Text>
                <View className="flex-row flex-wrap justify-between">
                    {/* Contoh Card Produk */}
                    {[1, 2, 3, 4].map((item) => (
                        <View
                            key={item}
                            className="w-[48%] bg-white p-3 rounded-2xl mb-4 shadow-sm border border-gray-100"
                        >
                            <View className="w-full h-32 bg-gray-200 rounded-xl mb-3" />{" "}
                            {/* Placeholder Image */}
                            <Text className="font-bold text-gray-800">
                                Sayur Bayam
                            </Text>
                            <Text className="text-green-600 font-bold mt-1">
                                Rp 5.000
                            </Text>
                            <Text className="text-xs text-gray-400">
                                per Ikat
                            </Text>
                            <TouchableOpacity className="bg-green-500 mt-3 py-2 rounded-lg items-center">
                                <Text className="text-white font-bold text-xs">
                                    + Keranjang
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
