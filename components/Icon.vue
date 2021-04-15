<template>
  <span class="icon">
    <CaduceusIcon v-if="icon == 'Caduceus'" />
    <HealthcareIcon v-if="icon == 'Healthcare'" />
    <MedicalRecordIcon v-if="icon == 'Medical Record'" />
    <MedicineIcon v-if="icon == 'Medicine'" />
    <PillsIcon v-if="icon == 'Pills'" />
    <HomeIcon v-if="icon == 'Home'" />
    <UserSecure v-if="icon == 'User Secure'" />
    <UserGroup v-if="icon == 'Group'" />
    <Tooth v-if="icon == 'Tooth'" />
    <Knowledge v-if="icon == 'Knowledge'" />
  </span>
</template>

<script>
import CaduceusIcon from '~/assets/caduceus.svg?inline'
import HealthcareIcon from '~/assets/healthcare.svg?inline'
import MedicalRecordIcon from '~/assets/medical-record.svg?inline'
import MedicineIcon from '~/assets/medicine.svg?inline'
import PillsIcon from '~/assets/pills.svg?inline'
import HomeIcon from '~/assets/home.svg?inline'
import UserSecure from '~/assets/user-secure.svg?inline'
import UserGroup from '~/assets/user-group.svg?inline'
import Tooth from '~/assets/tooth.svg?inline'
import Knowledge from '~/assets/knowledge.svg?inline'

export default {
  props: {
    icon: String
  },
  components: {
    CaduceusIcon,
    HealthcareIcon,
    MedicalRecordIcon,
    MedicineIcon,
    PillsIcon,
    HomeIcon,
    UserSecure,
    UserGroup,
    Tooth,
    Knowledge
  }
}
</script>

<style lang="scss" scoped>
.icon {
  max-width: 100%;
}
</style>
