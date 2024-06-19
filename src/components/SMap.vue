<!-- <template>
    <v-card>
        <v-card-title>Map Input</v-card-title>
        <v-card-text>
            <v-map :zoom="zoom" :center="center" style="height: 300px">
                <v-tilelayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></v-tilelayer>
                <v-marker :lat-lng.sync="markerLatLng"></v-marker>
            </v-map>
        </v-card-text>
    </v-card>
</template>
  
<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
    components: {
        "v-map": LMap,
        "v-tilelayer": LTileLayer,
        "v-marker": LMarker,
    },
    props: {
        value: {
            type: Object,
            default: () => ({ lat: 47.4132, lng: -1.2195 }),
        },
    },
    data() {
        return {
            zoom: 13,
            center: L.latLng(47.4132, -1.2195),
            markerLatLng: L.latLng(this.value.lat, this.value.lng),
        };
    },
    watch: {
        markerLatLng(newValue) {
            this.$emit("input", newValue);
        },
        value(newValue) {
            this.markerLatLng = L.latLng(newValue.lat, newValue.lng);
        },
    },
};
</script>
   -->