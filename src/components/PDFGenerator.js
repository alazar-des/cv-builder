import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingVertical: 48,
  },
  profile: {
    padding: 32,
    marginTop: -48,
    paddingBottom: 16,
    flexGrow: 0,
    backgroundColor: "#2cc8aa",
    color: "white",
  },
  name: {
    fontSize: 24,
    fontFamily: "Ubuntu",
    fontWeight: "bold",
  },
  profession: {
    fontSize: 13,
    color: "#255958",
    marginBottom: 10,
    fontFamily: "Ubuntu",
  },
  summery: {
    fontSize: 11,
    fontFamily: "Ubuntu",
  },
  contacts: {
    flexDirection: "row",
    backgroundColor: "#29aa94",
    color: "white",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 6,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  link: {
    textDecoration: "none",
  },
  contactText: {
    fontFamily: "Ubuntu",
    color: "white",
    fontSize: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    paddingHorizontal: 32,
    paddingTop: 20,
  },
  title: {
    paddingBottom: 12,
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    color: "#255958",
    textDecoration: "underline",
    textDecorationColor: "#255958",
    textDecorationThickness: "from-font",
    fontFamily: "Ubuntu",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontFamily: "Ubuntu",
    fontSize: 10,
    color: "white",
    backgroundColor: "#2cc8aa",
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  detailContainer: {
    fontFamily: "Ubuntu",
    marginBottom: 10,
    color: "#2c2c2c",
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 12,
  },
  duration: {
    fontSize: 9,
    color: "#255958",
  },
  achievmentsTitle: {
    fontSize: 10,
    color: "#255958",
    marginBottom: 3,
  },
  achievments: {
    marginTop: 6,
  },
  list: {
    paddingLeft: 8,
  },
  item: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    color: "#255958",
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    color: "#2c2c2c",
  },
  contactPerson: {
    flexDirection: "row",
    marginTop: 6,
    fontSize: 10,
  },
  contactTitle: {
    color: "#255958",
  },
  contactContent: {
    marginHorizontal: 8,
    color: "#2c2c2c",
  },
  projectTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  ProjectDuration: {
    fontSize: 9,
    marginLeft: 4,
    paddingTop: 2,
  },
  technologiesContainer: {
    flexDirection: "row",
    marginTop: 6,
    fontSize: 10,
  },
  technologies: {
    fontSize: 10,
    marginLeft: 6,
    fontStyle: "normal",
  },
});

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTt2aMH4V_gg.ttf",
      fontWeight: "bold",
    },
    {
      src: "http://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7znUiAFpxm.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.profile}>
        <Text style={styles.name}>{props.content.profile.name}</Text>
        <Text style={styles.profession}>
          {props.content.profile.professionalTitle}
        </Text>
        <Text style={styles.summery}>
          {props.content.profile.professionalSummery}
        </Text>
      </View>
      <View style={styles.contacts}>
        <View style={styles.contact}>
          <Text style={styles.contactText}>{props.content.contacts.email}</Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactText}>
            {props.content.contacts.telephone}
          </Text>
        </View>
        <View style={styles.contact}>
          <Link href="https://www.alazar-desta.com" style={styles.link}>
            <Text style={styles.contactText}>
              {props.content.contacts.github}
            </Text>
          </Link>
        </View>
        <View style={styles.contact}>
          <Link href="https://github.com/alazar-des" style={styles.link}>
            <Text style={styles.contactText}>
              {props.content.contacts.website}
            </Text>
          </Link>
        </View>
        <View style={styles.contact}>
          <Link
            href="https://www.linkedin.com/in/alazar-desta-5b35a990/"
            style={styles.link}
          >
            <Text style={styles.contactText}>
              {props.content.contacts.linkedin}
            </Text>
          </Link>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.skillsContainer}>
          {Object.keys(props.content.skills).map((id) => (
            <Text style={styles.skill} key={id}>
              {props.content.skills[id]}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Education</Text>
        {props.content.educations.map((edu) => (
          <View style={styles.detailContainer} key={edu.id}>
            <Text style={styles.subtitle1}>{edu.studyProgram}</Text>
            <Text style={styles.subtitle2}>{edu.institution}</Text>
            <Text style={styles.duration}>
              {edu.startDate ? edu.startDate.toLocaleDateString() : ""} {" - "}
              {edu.present
                ? "present"
                : edu.endDate
                ? edu.endDate.toLocaleDateString()
                : ""}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>
        {props.content.experiences.map((exp) => (
          <View style={styles.detailContainer} key={exp.id}>
            <Text style={styles.subtitle1}>{exp.position}</Text>
            <Text style={styles.subtitle2}>{exp.company}</Text>
            <Text style={styles.duration}>
              {exp.startDate ? exp.startDate.toLocaleDateString() : ""} {" - "}
              {exp.present
                ? "present"
                : exp.endDate
                ? exp.endDate.toLocaleDateString()
                : ""}
            </Text>
            <View style={styles.achievments}>
              <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
              <View style={styles.list}>
                {exp.achievments.map((ach) => (
                  <View style={styles.item} key={ach.id}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.itemContent}>{ach.value}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.contactPerson}>
              <Text style={styles.contactTitle}>Contact:</Text>
              <Text style={styles.contactContent}>{exp.contactName}</Text>
              <Text style={styles.contactContent}>-</Text>
              <Text style={styles.contactContent}>{exp.contactEmail}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Projects</Text>
        {props.content.projects.map((project) => (
          <View style={styles.detailContainer} key={project.id}>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>{project.projectName}</Text>
              <Text style={styles.duration}>{"  ("}
                {project.startDate
                  ? project.startDate.toLocaleDateString()
                  : ""}{" "}
                {" - "}
                {project.present
                  ? "present"
                  : project.endDate
                  ? project.endDate.toLocaleDateString()
                  : ""}
                  {")"}
              </Text>
            </View>
            <View style={styles.achievments}>
              <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
              <View style={styles.list}>
                {project.achievments.map((ach) => (
                  <View style={styles.item} key={ach.id}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.itemContent}>{ach.value}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.contactPerson}>
              <Text style={styles.contactTitle}>
                Languages/Frameworks/Libraries:
              </Text>
              <Text style={styles.contactContent}>{project.technologies}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
