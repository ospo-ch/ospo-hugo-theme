---
title: ospo project template
description: A repository template for ospo.ch projects
params:
  org_name: ospo.ch
  repository: https://github.com/ospo-ch/project-template
  score:
    aggregate: 28
    documentation: 50
    license: 25
    practices: 15
    security: 40
    legal: 10
  repositories:
    - name: project-template
      score:
        best_practices: 100
        documentation: 83.33333333333331
        global: 86.66666666666666
        legal: 0
        license: 100
        security: 86.66666666666667
      documentation:
        adopters:
          id: adopters
          title: Adopters
          description: List of organizations using this project in production or at stages of testing [check docs](https://clomonitor.io/docs/topics/checks/#adopters)
          passed: true
        changelog:
          id: changelog
          title: Changelog
          description: A curated, chronologically ordered list of notable changes for each version
          passed: true
        code_of_conduct:
          id: code_of_conduct
          title: Code of conduct
          description: Adopt a code of conduct to define community standards, signal a welcoming and inclusive project, and outline procedures for handling abuse
          passed: true
        contributing:
          id: contributing
          title: Contributing
          description: A contributing file in your repository provides potential project contributors with a short guide to how they can help with your project
          passed: true
        governance:
          id: governance
          title: Governance
          description: Document that explains how the governance and committer process works in the repository
          passed: false
        maintainers:
          id: maintainers
          title: Maintainers
          description: The maintainers file contains a list of the current maintainers for the repository
          passed: false
        readme:
          id: readme
          title: Readme
          description: The readme file introduces and explains a project. It contains information that is commonly required to understand what the project is about
          passed: true
        roadmap:
          id: roadmap
          title: Roadmap
          description: Defines the high level overview of the project's goals and deliverables ideally presented on a timeline
          passed: false
        website:
          id: website
          title: Website
          description: A url that users can visit to learn more about your project
          passed: false
      license:
        license_file_exists:
          id: license_file_exists
          title: License
          description: The LICENSE file contains the repository license
          passed: true
          value: Apache-2.0
        license_approved:
          id: license_approved
          title: Compliance
          description: The license is approved within the organization
          passed: true
        license_scanning:
          id: license_scanning
          title: License scanning
          description: Automatically identify, manage and address open source licensing issues
          passed: false
      best_practices:
        cla:
          id: cla
          title: Contributor License Agreement
          description: Defines the terms under which intellectual property has been contributed to a company/project.
          passed: true
        dco:
          id: dco
          title: Developer Certificate of Origin
          description: Mechanism for contributors to certify that they wrote or have the right to submit the code they are contributing.
          passed: false
        github_discussions:
          id: github_discussions
          title: GitHub Discussions
          description: GitHub discussions enable better collaboration on the project
          passed: true
        openssf_badge:
          id: openssf_badge
          title: OpenSSF Badge
          description: The Open Source Security Foundation (OpenSSF) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices.
          passed: false
        openssf_scorecard_badge:
          id: openssf_scorecard_badge
          title: Scorecard Badge
          description: Scorecard assesses open source projects for security risks through a series of automated checks. For more information about the Scorecard badge, [please see] (https://github.com/marketplace/actions/ossf-scorecard-action#scorecard-badge)
          passed: false
        recent_release:
          id: recent_release
          title: Recent Release
          description: The project should have released at least one version in the last year.
          passed: true
        chat_presence:
          id: chat_presence
          title: Messaging support available
          description: A messaging platform allows to build up the community for the project
          passed: true
        pull_request_template:
          id: pull_request_template
          title: Pull Request Template
          description: A Pull Request template speeds up the approval process
          passed: true
        issue_template:
          id: issue_template
          title: Issue Template
          description: An Issue template helps with filing bugs on the project
          passed: true
      security:
        binary_artifacts:
          id: binary_artifacts
          title: Binary artifacts
          description: This check determines whether the project has generated executable (binary) artifacts in the source repository
          passed: true
        code_review:
          id: code_review
          title: Code Review
          description: This check determines whether the project requires code review before pull requests (merge requests) are merged.
          passed: true
        dangerous_workflow:
          id: dangerous_workflow
          title: Dangerous Workflow
          description: This check determines whether the project’s GitHub Action workflows has dangerous code patterns
          passed: false
        dependency_policy:
          id: dependency_policy
          title: Dependency Policy
          description: Project should provide a dependencies policy that describes how dependencies are consumed and updated.
          passed: false
        dependency_update_tool:
          id: dependency_update_tool
          title: Dependency Update Tool
          description: This check tries to determine if the project uses a dependency update tool, specifically dependabot or renovatebot
          passed: false
        maintained:
          id: maintained
          title: Maintained
          description: This check determines whether the project is actively maintained
          passed: true
        security_policy:
          id: security_policy
          title: Security Policy
          description: Clearly documented security processes explaining how to report security issues to the project.
          passed: false
        signed_releases:
          id: signed_releases
          title: Signed Release
          description: This check tries to determine if the project cryptographically signs release artifacts.
          passed: false
        sbom:
          id: sbom
          title: Software Bill of Materials
          description: List of components in a piece of software, including licenses, versions, etc.
          passed: false
        token_permissions:
          id: token_permissions
          title: Token Permissions
          description: This check determines whether the project’s automated workflows tokens are set to read-only by default.
          passed:
      legal:
        trademark_disclaimer:
          id: trademark_disclaimer
          title: Trademark
          description: A trademark should be applied to protect intellectual property
          passed: false
---
