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
  },
  link: {
    textDecoration: "none",
  },
  contactText: {
    fontFamily: "Ubuntu",
    color: "white",
    fontSize: 11,
    marginRight: 24,
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
        <Text style={styles.profession}>Full-Stack Developer</Text>
        <Text style={styles.summery}>
          Software Engineer with fundamental knowledge on designing, building,
          maintaining and testing of backend based applications. Seeking to
          purse an opportunity with a growing organization that will utilize and
          enhance my knowledge in software development.
        </Text>
      </View>
      <View style={styles.contacts}>
        <View style={styles.contact}>
          <Svg style={styles.icon}>
            <Path
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              stroke="rgb(255, 255, 255)"
              strokeWidth={1}
            />
          </Svg>
          <Text style={styles.contactText}>alazaronemail@gmail.com</Text>
        </View>
        <View style={styles.contact}>
          <Text style={styles.contactText}>+251960803488</Text>
        </View>
        <View style={styles.contact}>
          <Link href="https://www.alazar-desta.com" style={styles.link}>
            <Text style={styles.contactText}>alazar-desta.com</Text>
          </Link>
        </View>
        <View style={styles.contact}>
          <Link href="https://github.com/alazar-des" style={styles.link}>
            <Text style={styles.contactText}>alazar-des</Text>
          </Link>
        </View>
        <View style={styles.contact}>
          <Link
            href="https://www.linkedin.com/in/alazar-desta-5b35a990/"
            style={styles.link}
          >
            <Text style={styles.contactText}>alazar-desta</Text>
          </Link>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Javascript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>Mongodb</Text>
          <Text style={styles.skill}>Typescript</Text>
          <Text style={styles.skill}>SQL</Text>
          <Text style={styles.skill}>CSS</Text>
          <Text style={styles.skill}>HTML</Text>
          <Text style={styles.skill}>Tailwind</Text>
          <Text style={styles.skill}>Python</Text>
          <Text style={styles.skill}>Flask</Text>
          <Text style={styles.skill}>C</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Gitlab</Text>
          <Text style={styles.skill}>Matlab</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Education</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.subtitle1}>
            Communication and Electronics Engineering (BSc)
          </Text>
          <Text style={styles.subtitle2}>
            Mekelle Institute of Technology | Mekelle, Tigray
          </Text>
          <Text style={styles.duration}>10/2008 - 07/2012</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.subtitle1}>Software Engineering</Text>
          <Text style={styles.subtitle2}>
            ALX Holberton Software Engineering Programme
          </Text>
          <Text style={styles.duration}>01/2021 - 02/2022</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Experience</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.subtitle1}>System Engineer</Text>
          <Text style={styles.subtitle2}>NBT Engineering and Trading PLC</Text>
          <Text style={styles.duration}>09/2014 - 06/2021</Text>
          <View style={styles.achievments}>
            <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Perform requirement, functional and architectural designs and
                  design calculations of radar system
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Algorithm development for radar system and implementation in
                  MATLAB and
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Testing with cppunit c++ framework and Matlab
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contactPerson}>
            <Text style={styles.contactTitle}>Contact:</Text>
            <Text style={styles.contactContent}>Bisrat Tadesse</Text>
            <Text style={styles.contactContent}>-</Text>
            <Text style={styles.contactContent}>
              bisrat.tadesse@nbtengineering.com
            </Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.subtitle1}>System Engineer</Text>
          <Text style={styles.subtitle2}>NBT Engineering and Trading PLC</Text>
          <Text style={styles.duration}>09/2014 - 06/2021</Text>
          <View style={styles.achievments}>
            <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Perform requirement, functional and architectural designs and
                  design calculations of radar system
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Algorithm development for radar system and implementation in
                  MATLAB and
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Testing with cppunit c++ framework and Matlab
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contactPerson}>
            <Text style={styles.contactTitle}>Contact:</Text>
            <Text style={styles.contactContent}>Bisrat Tadesse</Text>
            <Text style={styles.contactContent}>-</Text>
            <Text style={styles.contactContent}>
              bisrat.tadesse@nbtengineering.com
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Projects</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.subtitle1}>System Engineer</Text>
          <Text style={styles.subtitle2}>NBT Engineering and Trading PLC</Text>
          <Text style={styles.duration}>09/2014 - 06/2021</Text>
          <View style={styles.achievments}>
            <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Perform requirement, functional and architectural designs and
                  design calculations of radar system
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Algorithm development for radar system and implementation in
                  MATLAB and
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Testing with cppunit c++ framework and Matlab
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contactPerson}>
            <Text style={styles.contactTitle}>Contact:</Text>
            <Text style={styles.contactContent}>Bisrat Tadesse</Text>
            <Text style={styles.contactContent}>-</Text>
            <Text style={styles.contactContent}>
              bisrat.tadesse@nbtengineering.com
            </Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.projectTitleContainer}>
            <Text style={styles.projectTitle}>Video Streaming App</Text>
            <Text style={styles.ProjectDuration}>(02/2022 - 03/2022)</Text>
          </View>
          <View style={styles.achievments}>
            <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  A user registers and/or logs into the app to watch videos or
                  live broadcasts or to upload videos or live streams. Used
                  node.js and express as the server side, react as the front end
                  and mongodb as a data base to implement.
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Passport.js is used on the server side to manage user
                  authentication. Multer is used to save and retrieve uploaded
                  videos. Node Media Server is used to handle live video
                  streaming.
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  React and Bootstrap are used to create the front end.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contactPerson}>
            <Text style={styles.contactTitle}>
              Languages/Frameworks/Libraries:
            </Text>
            <Text style={styles.contactContent}>
              Node.js | mongodb | passport.js | React | Bootstrap
            </Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.projectTitleContainer}>
            <Text style={styles.projectTitle}>Video Streaming App</Text>
            <Text style={styles.ProjectDuration}>(02/2022 - 03/2022)</Text>
          </View>
          <View style={styles.achievments}>
            <Text style={styles.achievmentsTitle}>Achievements/Tasks</Text>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  A user registers and/or logs into the app to watch videos or
                  live broadcasts or to upload videos or live streams. Used
                  node.js and express as the server side, react as the front end
                  and mongodb as a data base to implement.
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  Passport.js is used on the server side to manage user
                  authentication. Multer is used to save and retrieve uploaded
                  videos. Node Media Server is used to handle live video
                  streaming.
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.itemContent}>
                  React and Bootstrap are used to create the front end.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.technologiesContainer}>
            <Text style={styles.contactTitle}>
              Languages/Frameworks/Libraries:
            </Text>
            <Text style={styles.technologies}>
              Node.js | mongodb | passport.js | React | Bootstrap
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
