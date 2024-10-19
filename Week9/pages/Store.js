import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import axios from "axios"

import {useState, useEffect} from "react"

const data = [{
  id: 1,
    name: "Pinarello",
    price: 1800,
    type: "RoadBike",
    img:"https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffBKVxcHy15mVMq7OEP3o5hFHCJWxypoIz0H2ESLy-4mPStipA-AYPsiCTlQ4yOvkI6l2ZE2ZmhSRODPwqreye3Xt1rTP5UI-xRnCrcDzf92w1UkN2AJrbv4N8em6Ugi~bSArHE6icqM7XCIbkuLofZJX~lI6IgkscUqGAkUGYBZTQgAaMU~sM8W2WLGsxdklUbkVmTIODLQDDZtAOoKaPhULcxg64F3vf2-houa-vw2XoIqWI5xBcL26x9xJiLD1ylWlmK~0OAwlboimHTt599QF5H0HpYzln9WMKcDqlntVTZQegSIZm-xBZa6-Jsdwi4kpOh4KK~35aZRM3jhag__",
    discount: 10,
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    liked: 100
},
{
  id: 2,
    name: "Pinarello",
    price: 1700,
    img:"https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HCPuZPtzO1oI2jXnHZcflYaQ2ywVhDYYPJWuM5i5Hj~OxhE29ok~sEmcttbUbbO3n8C-3IqAfDZCja1y9Q0r0IqpN9qcqAqAZj-TtN7hAg8wfrkMqrDyaukaOw6AZgIlkAsJQ5c7pqcr9K9J24Q3pCskyhhtzgKgXszLrzGO0anbAJtYfPhvope7nLOCmoeHVeID7EBoEvbQKAb1t3cpjti7OdHWFkjIP4P2FXB8eOMPfE20ieug8rVRed3IRWsiG8casD7x6OXtfevS8clXxgPUlhpRV71pzgvX4wl6juKfi8UYYTMExq~MlaDvPPKNCAdudc6OsyZFLO3KNKmACw__",
    type: "RoadBike",
    discount: 10,
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    liked: 100
},{
  id: 3,
    name: "Pinarello",
    price: 1800,
    img:"https://s3-alpha-sig.figma.com/img/49d5/2b9b/68c70d4381b662e07d65fdb7c3846000?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jw693rQr1ai6bLTDZXvhcmLQwZuZvISbkW41FP84b3GWKvoUQOmyuIItr0p98foYqnNGPcRgdwy1Ft5FXuPBi7slNrxUdJZNWPXjJNFul3Hdel9jz5POkQk9i-xFmremJi35vbxobLTP6G-hwYFxx2nV0dTfrhUQqPxSG3HdKRaihm8hPZrv4hVKVUdTNweGb-n0VtM1TI-f9dpa4bOaSR7iugP~hpItf1eDjFnnDV9Y~RDMFJu7s-TGYwHk6KnaJeu-8vYlGPHnJUoRWhrCCh357~iUqGm4X5Q8u9msQBtD74U2vlwELktREf5PPT1wDaCAVVT7S2bj3EIQLoLgIQ__",
    type: "RoadBike",
    discount: 10,
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    liked: 100
},{
  id: 4,
    name: "Pinarello",
    price: 1800,
    img:"https://s3-alpha-sig.figma.com/img/fdbf/d9b3/251a5a94adb31c5f3a0d6caf10fae43b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5I34mgZkiXj4EwBtfjNhGqtUZTfFFPucNM1NmFHhkp0s6H-DYMb0cGHmDHQMNiHgmbIANeZjefhfjslknoTtxKHPd09V8n-8KjI9KyW2Z4U3~wWW7sVxB8uBfmkCsAkJbG3J3AxquPKqdNmkANMFyxddvK2q7DJDMbEsLnBUrXidopHWnf3mh-VyQx5TBWndVTbqtxo~wYKMNoh0DPW-K30LcrMMjwv5Rx45Dhxy3XrWPkGdSESD7R2b4xWaniimbGZ9Ra~LI5di8muZpO5Yq~0mQpXotlWyL-kwLUdxKnx8Qrw~cOK0N-uve3wuwywIK6anyOpgO~weHvXlvfjnQ__",
    type: "RoadBike",
    discount: 10,
    description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    liked: 100
},]

const Home = ({ navigation }) => {
  const [bikes, setBikes] = useState(data);
    const [tab,setTab] = useState("All");

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get("https://66ff3c9f2b9aac9c997ea01b.mockapi.io/bike");
        console.log("EHEH", res.data)
        setBikes(res.data)
      }
      fetchData()
    }, [])

    renderData = tab === "All" ? bikes : bikes.filter(item => {
      console.log("TYPE", item.type, "TAB", tab)
      return item.type === tab
    })

    return (<View style={{backgroundColor: "white", flex: 1, paddingVertical: 32, paddingHorizontal: 16, justifyContent: "space-between" }}>
        <View style={{paddingBottom: 32, gap: 18}}>
            <Text style={{color: "#E94141", fontWeight: "bold", fontSize: 18}}>The world's Best Bike</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              {["All", "RoadBike", "Mountain"].map(item => (<TouchableOpacity onPress={() => setTab(item)} style={{borderWidth: 1, borderColor: "#E94141", borderRadius: 8, padding: 4, minWidth: 80}}>
                <Text style={{textAlign:"center", fontWeight: "bold", color: tab === item ? "E94141" : "gray"}}>{item}</Text>
            </TouchableOpacity>))}
            </View>
        </View>

<ScrollView>
        <View style={{flex: 1, flexWrap: "wrap", flexDirection: "row", gap: 8}}>
                {renderData.map(item => (
                   <TouchableOpacity style={{width: "45%"}} onPress={() => navigation.navigate("Detail", {id:item.id})}>
                     <View style={{width: "100%",backgroundColor: "#F7BA8326", padding: 16, height:"fit-content", borderRadius: 8}}>
                        <Image style={{width: 100, height: 100, resizeMode: "contain"}} source={{uri: item?.img}}></Image>
                        <Text style={{fontWeight: "bold", textAlign:"center", fontSize: 16, color:"gray"}}>{item.name}</Text>
                        <Text style={{
                          fontWeight: "thin",
                          textAlign:"center"
                        }}><Text style={{fontWeight:"bold", color: "#F7BA83"}}>$</Text>{item.price}</Text>
                    </View>
                   </TouchableOpacity>
                ))}
        </View>
</ScrollView>
    </View>)
}

const styles = StyleSheet.create({

})

export default Home;