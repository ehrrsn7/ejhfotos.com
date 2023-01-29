// import
import React from "react"
import { Link } from "react-router-dom"

// hooks/functions
import { useFirebase, queryFromFirestore, postToFirestore } from "../contexts/FirebaseContext"
import { getFirestore, Timestamp } from "firebase/firestore"
import { changeDOMTitle } from "../scripts/dom-scripts"
import { toast } from "react-toastify"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"

// assets
import "./Home.css"

// define
const images = [
   {
      subject: "ingrid",
      url: "https://lh3.googleusercontent.com/Efv8uOBD6-fVNC5YfYh9ldSUvfgwk34-35ylg4A7wyZOJ6_rdPgAVBSk5WnE-hhbuN1axUvlH1hhzicab5fimnNLusqqwvOTSIcahQnKBwDyWqCYFlwfYRSBx8x6JgjbQ6e9zvILHknlzGmZIlrEVc-rzzekdq2xpgZdg8egpXJNV0SC1LgquEeXBYfvjeNpHYhbQCn6woDon0W_MU6483lDvjTK022vugbiTJBKQF8wUzfaOXEWHoX7jTnvCn1mF4laSDYS_C-i5XaIDfpWWtD_VTRiUa93plXmj3sej2j7AI40m3GuF9sgsla_LsVIA4mGsTUQmQTmiCNYr4P2JuSW2BtMWEHJTsHigLaWn0_DfgZoynVl5Lb8lB6oOEjmY71YDvfDq247JubyI5IymDKH7UeIfWNbH2MEqpoIqmjiq7ktWSx_SHamc53l8Bwm6nee_vsVTOvjhDYTSwHD66TLHs-vaRNzS0V6dmTR3As1RjITlFtPf04Fi8G6hdFY6sJCVyZJoA-W57z_kYfIFt7XOc-rNhabBg-G_liKh8BVGqrXfV8R0i54TxTXJGO059xAqF-kXzdcEgEdpDaGqDN7a_c-e9kieJsQ621FI06VgMqDSFYCUlwNCsDUZme6jWaOS2Gc0hGzyR5TqQWf-7eVKBQO7Pen2Z5psIuNIePrIte6k8LqXGJXPo4LG8MnYooW_TWCGm0vTskFHYt3yVHOSVaaRi4p2xeamkJwpudMmkQDjZyMayxeG-1h5tNuyaDBeu8OVH1NcwXPNrbd2z3NFmdAkqg71sT4ZhvA4QBYqmaD8TF9NEneH-an7Q44aY9VhNa3iyOEabtMzZAziCg5ifi5qZhcj3Cu6VMrxD6Io5HJ6htwcWbuUBlWMW1u4cn_skG-yy0oE5Wx0gPamWDYbxT9zrs-dWV9TJNNV8cb1JfaO4i4WkR0WBapwNUgJmbMYAweuNDaeOdSASc=w2472-h1648-no?authuser=0",
   },
   {
      subject: "elijah",
      url: "https://lh3.googleusercontent.com/6zRqLMFjb-laAvoog5L3bDbvAIFWOwx7JneVLBMHsVKRomaEqyhdh_VwKUFNPq2xuDoVkEOoM2Emqjc3adjssmoWlVLmJW0YH7nQGU9DDXF-bIA0ofIgBJXl0rwoEwveHb1oIVH4KVvLS_wUoL3YLPB_6Kd4JL1cGAljmWcM1GXPSmZ4FskFu9H0nFU4cd9HC1o1-5HvCp9j07_turq_jnSALAz_GkVZM9RXOdwnHy2jhkm5uY9XKOKGuJuGuFxUoRxsS09BQHcv7Te4rA3-Fho4uQqwMrBNTjyiNPMeaH21otuVWDU7YCyfpS6fQS-wZTo61-A03-I5WBX7e8Wts8JHB5iVQDMPG_05Z4rDC1-xTDDYye5yfUjN6Uaalx5IMx8cO_6vG76tKmS9nZhp9QNL3SMh9qCIGk25eJgfXVaKEkfmIwPw21pcoesL0yAmBV3wR2Zb0a9XMaZ-ityfEqyIuEdPPTMUGsWdAHLK7K2CvpFrjTs2LXuOpGPyCWMrYTMZJZ4QSYsgLaeMpEH0r2rRwwuswn9_ZkYBIGaR7wqjYPU1TB3MPEj3ynAqOIBRBEtm_o42y88VpFovNtJfV7CfBJnI_TK1SZBr1iDGf4hSHDdpUTgVOOZCXtPc_tt1o29nTsLF7HfrVkL9As7cJVkmjgdJeDzECWdKmh-tXPh5B6VbcTJqh5WDtu5NAm9XtH8rs0i9vJfB4YxYFTAWo2DXxPLcGffl-0el56Cqt8-_zABMk8v32z84RjIE1nw5dxFr8bWeR100zM5jEDpCk3xAsZBzxvULA0tq93IOZNSBa2ZN5fdZlxV3Jj32gABLCCy8l1hbuAMW7J1briS3byIIXrsJag2t6wt5c67_IkIZP8NKe0lo4UfqUCfGY6w8th93wDcWWPXXNDnT_igeoitZjKP7HONe9Vh9KMb8Z6fhL6hVYgrLsP_R94QQjaYtplKwIFe_-8J58BZnQA0=w1472-h982-no?authuser=0",
   },
   {
      subject: "eli",
      url: "https://lh3.googleusercontent.com/eyvN_sAjZNBsw_BwIjRdTB_3dHh6GM1tcQqZXY3HgHnECvUhrjMvAVobf4E7A4SYTvVxtQwVKPyUWeBXijF5e8WmYbStKmC3-X2OqypuXjzf7w3AxJw-ThjRYnUpyMENIzEFGR9jLcpYGeUufBqJkdgAqsxbrHx7mtEE0lIzI-1RadyNBqlPWNcSdftArTIg3s14HSvs2a3OGP7h1YIeRrIuXwCiwNVSQeTK3GzPaMdB9q7SnXnqMJqjsZ6xlKIy2M1T6fvwilW0bADfzHUiZ4v5CTVFxT2xWUzFYU8kuRK2Ww6cILwKgjPMgadxXnrB1mfg0dUL4kwmLvB5VjCz3vsG-mZLL9HxSa5ZJXp-wNPzl2RFiWgNNoxinr9WBDRyJOoBE4rAboWBhizOLadDiloiFAPAu2yMdYqIgx624tRvHpjuLNqTEJueHFpbLKCAUyfREj6FJD9lagVbX-D6VDFXP9HZUoS5MaBsmQMAgGjmUDzFOSGlgYmM-Vgvm1yrXFnxH_bUuxvTZg1SUJgtFsoLTuHL3dJkD4d1CC7psKpieuGxKtuxZUhl8-mIfQ0uEkZuUsyGTkFRmBHKmzbnVjLCiomSQdB9m0hUN8hiBApbulWwOcuk-umdMk2LA0XGq8G3kEG7ONkaIFVHW-0LW2ywXN8G8AnscMQeJijl2WdccM7Lz-jPUexHcwFEpLlUW4IYCIiTz1n918e0lIPOWcDfbzHPw1IFTYr7FlD6CtHcWGz0pWEWxtEWAKLvTc_3mRaInxpgcY4T9KKfX-XlAG-o6MhfPF_FsgaFU-GsF0wRdLIRXiZFNtY43E8byLbC5J4kD26tQhdOm0lP37MEp0f6NBiRrm6LlVZDoqWCJIgRQ8B9a4cY3dve2eg-tPLqmNGcTiaG3pRkovVkND6Mbcr5nF3DeHZfV9Q4uJKUg6Z7X42GPGD3NBj72SGCjjVjeWPezR8GAn_IUoOnzho=w1472-h982-no?authuser=0",
   },
   {
      subject: "daniel",
      url: "https://lh3.googleusercontent.com/HVb9TzghHuNRVsI80Taw40a0ZFzOVxxLyO-efZu-y0NHN_90pxcLkql8WM3W8MZEfVbGzbdM2ukxCuMTPEk50eEcMSRRy_LURbrh9KjOA7mFjyia2wKr-8d_7exemJpegXPSinybi6WZyEf8kYAiWT9kEx5AEn125HLOz-qJ8OIVyNlhAyN5fo60tjoKNj3WoV90D5x3Yg7_C8lefcMvyeNsKtxfOY0myA8odTj5qOL-EuSv0WFqsugPglxXka9liKvHXEajFulsYYyFsn5i0h2EuAf8-5zjrSJx-3qWEhEuVwgZmcBfYHn4JQjcTopdUbKvZbuB88Yc8Zh_Kd8-hF69R20LP7NSSSunff7nv7dDv_WQM7dFK4dnrdquCmW44vIzHY9OBXuYzQJ2YP4KESGLqI9JG1u7LOJahYVoZVR7__WVF9Kku_myE2etdUCHmOFOUK2U7_3oiVx9NtvZ3Ih6M8Wlcoft3bd6be4FN8F7lSGbBd7S5EQyuFn0HqSaEHGzQw6_TMUKzkJ87BPgStTLgcd-L_mL71ymHMAoqF69CXZkIqF2d5dZaHppcjvXaYwW9hWdfs_aq4vZiPedkJPYWcWOeqQrP64NbrWs3pemFyZxF1BvEsiDNEWAVXaR7RAmeSgkV2MzfrqruJW3DupgA5aNi5rcD_yaaH3hozq6-S4Ba6fHTBtqqyYJXyL7WfJGjjPHCWF-V_M3xumc33oYJ9UUPjSfDX6e5tGKgDjLtoEePYlKwMAfewfitSDJZln5h22XJDtHGLTr79InrO3aS4ylukTvYWpl8eldWqsrc36L3Zfm9aYY9rUfmNhhedbXH3W6_HtfOmxHG-5__Fn6DVG8LoGsCZr46_uFyFo-qZdCvgX5EriMAJY0vfJy6zSUXIB85g2j3XwtEyBsYrNbbKKo4rrcU_7U1pksjZ_xUPZLdRQHt4RUokLGCRYrStXFfR0IuPazQy18uNg=w1472-h982-no?authuser=0",
   },
   {
      subject: "sherrise",
      url: "https://lh3.googleusercontent.com/UTOPnXk5ULuUasvyHZiXlamwFoafj-tnUQzZRfPaKuvqOapcBr8OeT9EpgX9U9GRiHAlUBf-2ppTSF9zS32A4WfDGZv-CuVtroeMmSzh4FLB0IbrcPf7G8kZ31u0KBb92XeW_lAXoZZhb0XHul0mFnnIABt1S9hABxzBA4xJuOU6l-Q5TSUamxE8smuLMrrSkhG-ATEgKfrAc5kAzb0oYqCie0qCTp6esiVwOZ1kNb3kffk7lwPh0uFBzmKZ_xLwX4Mi3gqD9F0iQ_RUu61g8cGNmYw4AZ9yh-_m55SG18zZ8pJC62zn5J16nUVmMMmzIq35ciNQRSBs0LdfV-Zzh3H4ZxALBBt8KGdWlvmFcnb5TVjpCaGMgSkn8tBeoL-eIcg0vduwPDwlE1HUSWH4Txf-bAtD8YWd-_F-0aH6a223RdlhT02dWrDB74jqFxlg08HrDieqDCI4O43QfUKnluxMr-_Z4C-bCT9LglV5m_Bw5nLU5Y5EHkEF7QsKrgoUAHZhNeQVxMPSm-86Qbwp_KhiPKe7JjZ2fiDEJI2OrBzayEokbqyAVNk7DtMyCPupn3m9nY5snW3Z2wcb1mIyww4n5GKZBYOMDzCch5JdUEvqwtfvMuChqHL-54Av0r6r8FYJV4pBoB2X1y9j65TW3wDDFQgVLkDquBKYiRwJ2yHzDcCWz5IdtMJ90kwm7qtj8BWGkAxi7Yq_AZr0Bn_VJBvzYRGtscwQkNOS-0QIzAIrzmznoqKb-9Nrt1HdXQngq-tFXtGqDm8nEPhLLVIAGEEkhvEOTWHY7EcA0X2tld-TmlIlizFA48C2_0tHTIk6w4aa0qlnoCNugb9212m9IXbvoQarWsMeaPTCo-Fm39QMXcsUY5CTkewzvV5yfr7TFj2OSfH6v42HyGXArPc4DM9NxMwiHud3ffFQkmE4TIZHbZPWSpmPtHGaFGTTaLDEfAGrjPp60RwcZAOO9t0=w1472-h982-no?authuser=0",
   },
   {
      subject: "leo",
      url: "https://lh3.googleusercontent.com/HKQkERQ3xCymgmwqna_3qFV4Xvi1-Rj_nnPoQEnvMiARiuDGQn0nhDbajf05Sb4iNBXP-eWYFUKMTQvXSxe7uywC9K91AbJRld7nMG3ZmsyXjlwIu6C9vSXhvXOa71f2vMId1uh5C8rmMGCZS5n1yi5u7Fp8BNVKQOigyO0DmfCpCWXdUVNzRU027vzUGapF62UNPBC0zdeRVhXkwY0WPBNZwA0jX6A9tSggZ0WTv7ibLd8v6bfZZBigbUoZnt1h68cyI-91gtQfz052NCGFCJkwwzLwZF-3uT2CaiIDzJ5fAY0lwiq_n-SleY0iPTeu8LG7ne-89uFZl-ugCzxHGiPN2945qhAxZMNh1Rmyw1jJ_5KaXLIe1-pt81sL7CQ9gYzeCcGno2ulCe2_KOmOoB1YUnSt7gXDz_6SWQ3SzRZPzyb455Lc9FZ5DdGY0SPioxTVDvSN_-Xh6B4wABYTF-xDJ5uBdprHp0i0RcTcHzV-8CVW2AL3k4JzvYLw9bLu3_3nprASqR6VvPkLVamDQ_e-GeyIhnzEg1WW2QDasKM9CB0xPC3RGSwxjWQWgNZmrZDWXE3uulhwXyKPIHJ-2l3i2b1SIDO1oaEynnO8xEs963PcXGdy2foN1YDD23u27GsSwV5-uVBRj8tQQeyWEciRT2T5Fp27uoascXtWockpG67WI7TmSolx_vsYgvgkRRrdmKbBOgEHZiqFzL-D7qhyXAK8R_rAb6dlvBewLIDFSnTxr6DuWPme9nNyUbyE5UMXnb8r_ZXafG5Qo1IPVwR53pe_4Qs0ggG15ZxRGngYaQfFo_zJzs8PiJMtGrJtPPusrH5O1-LY4_8HgC-RdwAD4YAejpWdI1BqoDt01xsv82xeCpJAMcVQFh5xPpNy2xy3lT2JpsoxL0dzAjBBXXzL1wMrR2jU0BgixSZdxzY26RZfIcPX7cmg8GiJaAHAcCW5q3OODDotHNFrYsk=w1472-h982-no?authuser=0",
   },
   {
      subject: "julio",
      url: "https://lh3.googleusercontent.com/y5sIeKM003Ks_wnM3ahqVtoOx234o2kXPTh1CrVUjrhSoI7kvzrkKn6-nJYIoiAFpZIiGruqmVtmoyXLjwf8xAfkDzt9ESj1mshDZc0CpwURjVWceuecnMoSidrG2Oz4IFp8TWaevwNfNJPYYJU2jfoTGHlN9KU_BND9mX-yB4VBl2BE7GGj2tBr-TGKyAGwmsRSObvMVhy2K7zFpR_imN7oS0JmqHjkfLEQ6z7uXH2Pumf5b2WMRNMzg5KvL3n2l0N889UyWggb-SYjnFjk2pFj4BJnVTXrpITbkPpWHby56Twz7Vivl-OGiYXKZ569xxszXAlOzHf3K52bpErTgJwsV3XVV6yY2MPuk2LXywm3bFT-eY4rW3APa26Zo-mD4lIztGMFQeigCK38GAG2np4EYuYL0K87Dw7Z7jtP4Z0r_EOnYO_YQXLhxU9SVC-VkzufJ4sjwN47RAD-SRmTrmMcg9mYbRVh4q-FjiH0C1FbXZVuBWUu58TiyzbU4kJcoSOrCeOlgL3CI2TGUnFiMPtVLL-SgxCnPJ5rLjA7hXLZp1cLwRUCNKyNz-d8vXNw687wRN65Ugi_8HaonLJacr5zj69ntsllfz6okGV5ysRS-RoBWR_-42AWtF9K-WJ5OTiTxo-GLymrmcL-TA86U4yYP5LzFWMLopl_n0WaBy-1fhXp07uitgS8irXwsfdwpgLbi6C7XHKGOKYHY65nK3zl3mRI11aQKIWDtfLh4hKSyJIzFeU48_LtpmgJgU9N0jHNWN3FMUjYWU96xv2RTtaE8xQd_I2AbP9KpSBUcYaL1tnqRqutmFhCr9n4J9qEr_TtRCsHbVQD-ZtAsjl0oTJUeaWdZfGQ3qcVUCdvEsy3UW5sFOvgMbYa8Cd99yib6daa3ODBCMd3vJgt_r9GZ2T4HD7l7XhfjFUXajLU5T7UH-L9z842p51p_czFkekEaUAm7t-04iWrKngRaPM=w2352-h1568-no?authuser=0",
   },
   {
      subject: "mattheus",
      url: "https://lh3.googleusercontent.com/XjotkwNWcHMBHSaZuuZ57LGuN4L89aFptKCb989Qic6ry6F-hh-oWV5vCVwNopD8cv6VGVwAkRaFf422s5f4SGq6OY5hRJTgvbYTiuYICYj996v6KFaqYaOZNfpksoIHfIqqS_a4_VjaCjS2_Elffr15GeLECpSi7g8jzdQO4jPhjap6k6qtUMt5oW8Z8pyONRXemR-3H_A4aJh_SvPLz_1J1en67N5OpEj_18PkndrY3YnmxP8dzf5i6gdIdlIpN51b-2-JeZ21bNSc9XQNfRzsYxfTmAKLSdB3vFadCGZRQI0_-UypitUN-nKTkFYKFEPAe0d2FJ5WWvaZ1nNblZ9wUnqCLUHNozbUIs-aLud9E2hhE4tLhaGvVpuAXGvwYuPqwPhczi1IjUVu88bxHlGBMsrYAGz_EWQaenog9liyU8fpNL_Ms4SQLaPJocn8Tw_hhORXkuP7tuVcr16wUHwXwSOdbjIZPGd2f9GcTo6A6jWjpJifz6XFF2vRyHpa8hzCWkyZue7dZ4BJQ3i88dFsIUsLAT_hKbzuOJgSyg1EXTOA1fS-106_DtBEMwERFu8O96NXIoSRTzZI7Vy2sc7dal0SAmmhnivU9wR6Ke_CZpFsWYH-tZHERtCrj05at1SDhrh0bPDcYPF8x0xQPR3IdcLmhb6GQZ7IhlQeotM_XUlA5V2weDiKlWxeIpoec7xKu8tJMJ67UxPprnF90A8TRKf2fgJD_SwgjGQkBX8M8dctfmgi04WNCkneXewkl7g1mLPm6tasgmmx0FzANZhL5b2VqJYCZ0LM1MvQghUdAZci4IVabYtGZiHbP4UYmb-xMB5xVk6lXAUe7Qm2S7HvN9S-J9NWrZHOZiDt54T5xHUzmGZ9VqTMTZtZyayj-d-y2z5X2csswqLeDNJvo9jK2Rc__cqEjcP0Gn_cRPT6Vrd3A4ZPgRyyuN7t9CVd2GCzLVZZQr5H-J8OyMM=w2352-h1568-no?authuser=0",
   },
   {
      subject: "aaron+jess",
      url: "https://lh3.googleusercontent.com/3i5O2ANeLiVx8OCtiuFJxubQsSIcyZ6j6YHkiikSI0bn167pq05oV_ZTSIc1TI5Qz2nwSLyMaEFwWRv91cGlB-SEDOgVzvLXU2ddVwu8gDfJLmGG-IeTzgbikr1xgluuJisQWmU_D89MKXEb2UJFEcCaYshM7rWP0ryOYEUecTmnpNuow5uWz0mSNLD_y33dfD8LAd88fptY8a8tXDE63THQqW7nRYYXxLlRlJ_wdCREDRzqpaqBQ03nyCn5qJRigQQAOFJyP4sQbzJEdbAQV5r-fIkP-hpkAIU5dSYHWliR5Ol_hs4Z6UMWjpBKJxzB-f-6bm1ZGG0xrIiScH4ieJCFeCRp1_Tsk3ZC8yKjSoIy_KMPOGk4Ge9tBK_hDD-Q8k90KsFCPKKGhCW240LqXjqtiGl1XbsmPStNtmVgQTVs6tm9tTrPoTkrdpsz6218DRHeNRpttHzUyTn2uUB8bzqRQO2de9JpYqUVOtfP_CZmxWyHdhXKQVdJ_hqfFPf9qOuMLIqcpABIFEdZbgfUTOZPDXA-8YeoouiYrXQdldqdqKhV4MvFUgLgj-1yXTrU6TvgA7B_e2QZ4Qw5f_eUPqg1BGFHWXqzzkctPRn-VJnx5-wsIrk2WzDLQ5kUjqc_qjs74ZMoUJ9j3Eeojze73EbVDD3Ljra9-O3MlTn-FkwwpruFoOF6WeeFj2b3mF42vEpy1Urnq6MDijXqZNWoKiSKemNHPca2Q4fU9NpQPPRDb76JuvLlhP3RyOmOs3QLQO4VlIa4vuabuDqGvVhj8XKaUnOB-IKSCtO1Pxxpg_w108r8Q0cdbgpFdM5ijiD_eFRo0L55orXbIYt3hV7ZqLTT87hltbNs6R76B00pK1PsG0PXCeJJciiS-DzYkwL7XVLaeXnEMtPllvRcdESiJcdUQ-7-qsRI35nnyGX_t-RdqKSZEtZg7Z4GVupfS74xxsjHDeiEpSoP_k_I5pQ=w2352-h1568-no?authuser=0",
   },
]


export default function Home() {
   const firebase = useFirebase()
   const firestore = getFirestore(firebase)

   const [image, setImage] = React.useState(images[0].url)
   const [count, setCount] = React.useState(0)
   const [tasks, setTasks] = React.useState([])

   React.useEffect(() => {
      // set page title to "Home"
      changeDOMTitle(document, "Home")

      // once every five seconds
      const interval = setInterval(() => {

         // wrap count
         if (count + 1 < images.length) {
            setCount(count => count + 1)
         }
         else {
            setCount(() => 0)
         }

         // set new image
         setImage(() => images[count].url)
      }, 5000)

      return () => clearInterval(interval)
   })

   queryFromFirestore(firestore, "tasks", setTasks)

   React.useEffect(() => {
      console.log({tasks})
   }, [setTasks])

   try {
      return <div id="Home" className="content">
         <Header image={image}>
            <span style={{paddingTop: "60vh", paddingBottom: "3em"}}>
               <Link to="/"><button className="SpecialButton" onClick={() => {
                  toast.error(<a href="https://console.firebase.google.com/u/0/project/ejhfotos-1671844834579/firestore" target="_blank">firebase</a>)
               }}>Show Firestore Link</button></Link>
               <Link to="/"><button className="SpecialButton" onClick={() => {postToFirestore(firestore, "tasks", {
                  title: "hi! new new tasks here",
                  description: "new new tasks",
                  completed: true,
                  created: Timestamp.now()
               })}}>Post To Firestore</button></Link>
            </span>
         </Header>
         <main>
            <h1>Welcome!</h1>
            <p>This site is under construction. I hope to put a wonderful photography website here!</p>
            <p>Plan:</p> 
            <ul>
               <li>
                  <p>
                     <a href="http://www.ejhfotos.com/">Home:</a>{' '}
                     This will be the main page, the photography site. 
                  </p>
               </li>
               <li>
                  <p>
                     <a href="http://about.ejhfotos.com/">About:</a>{' '}
                     This will be a landing page for everybody, including not only those who click the "about" link, but also potential employers who would like to clearly see my software portfolio, links and resume. 
                  </p>
               </li>
               <li>
                  <p>
                     <a href="http://linktree.ejhfotos.com/">Linktree:</a>{' '}
                     Lightweight linktree.
                  </p>
               </li>
            </ul>

            {/* Template Items */}
            <h1>Template Items</h1>
            <p className="Subtitle">(Placeholders for the various components to be integrated in this site. Basically, "TODO" components.)</p>
            <br></br>

            <h2>[Welcome section]</h2>
            <br></br>

            <h2>[Hover Carrousel]</h2>
            <p className="Subtitle">(For preview of "weddings/engagements/other" images)</p>
            <br></br>

            <h2>[Check out our latest <em>"[]"</em>]</h2>
            <br></br>

            <h2>[Normal Album Carrousel]</h2>
            <br></br>

            <h2>[Normal Text with Button Sections]</h2>
            <br></br>

            <h2>[Text and Button with Background Image Sections]</h2>
            <br></br>

            <h2>[Testimonials Section with Text, Image and Arrow Buttons]</h2>
            <br></br>

            <h2>[Fixed image backgrounds to scroll over]</h2>
            <br></br>
         </main>
         <Footer />
      </div>
   }
   catch {
      return <div>
         <p>Error 500</p>
         <p>Something went wrong! This is a front-end error caught in 'Home.jsx'</p>
      </div>
   }
}
