<template>
    <v-content>
        <h2 class="display-1 font-weight-thin pl-4 ma-2"> MES INFORMATIONS </h2>
        <v-card 
            d-flex 
            flat
            width="70%"
        >
            <v-row>
                <v-col align="center">
                    <v-card width="70%" flat>
                        <v-img
                            height="150"
                            width="150"
                            src="https://i.pinimg.com/564x/d1/e6/23/d1e623f28a9b55d08f8c0bf91dd92092.jpg"
                            aspect-ratio="1"
                        ></v-img>    
                    </v-card>
                </v-col>
                <v-col>
                    <h3> Informations visibles par les autres utilisateurs </h3>
                    <v-row justify="space-around"> 
                        <v-col>
                            <h4> Genre </h4>
                        </v-col>
                        <v-col>
                            <v-radio-group row>
                                <v-radio label="Homme" value="homme"></v-radio>
                                <v-radio label="Femme" value="femme"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <h3> Informations privées </h3>
                </v-col>
            </v-row>    
        </v-card>    
    </v-content>
</template>

<script>
export default {
    name:'Parameters',
}
</script>